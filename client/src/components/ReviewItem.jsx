import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";


export default function ReviewItem (props) {

  const { comment, rating, userId, stationId, createdAt } = props;
  //{`Posted at: ${createdAt.split('T')[0]}`}

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${userId}`)
    .then(response => {
      setUserInfo(response.data);
      console.log(response.data)
    });
  }, []);

  return (
    <div className="main_block">
        <div className="details_block">
          <div>
            <img className="gas_station_image" src='abc.png' alt="User Avatar" />
          </div>
          <div className="station_details ReviewRows">
            {userInfo && <div>{`${userInfo.first_name}`}</div>}
            {userInfo && <div>{moment(createdAt).fromNow()}</div>}
            
          </div>
          
        </div>

        <div className="details_link ">
          {comment}
        </div>


      </div>
  );
}