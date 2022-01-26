import { useState, useEffect } from "react";
import { Avatar, AvatarGroup } from '@mui/material';
import moment from "moment";
import axios from "axios";
import { blueGrey, deepOrange, lightBlue } from "@mui/material/colors";


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
    <div className="ReviewMainBlock">
        <div className="details_block">
          <div>
          {userInfo && <Avatar alt={`${userInfo.first_name}`} src="/static/images/avatar/1.jpg" sx={{ m:1, width: 56, height: 56, bgcolor: lightBlue[500] }} />}
          </div>
          <div className=" ReviewDetail">
            {userInfo && <div>{`${userInfo.first_name}`}</div>}
            {userInfo && <div>{moment(createdAt).fromNow()}</div>}
            
          </div>
          
        </div>

        <div className="ReviewComment ">
          {comment}
        </div>


      </div>
  );
}