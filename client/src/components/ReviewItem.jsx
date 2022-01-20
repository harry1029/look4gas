import momemt from "moment";
export default function ReviewItem (props) {
  const { comment, user_rating, user_id, gas_station_id, created_at } = props;

  return (
    <div className="main_block">
        <div className="details_block">
          <div>
            <img className="gas_station_image" src='abc.png' alt="User Avatar" />
          </div>
          <div className="station_details">
            Posted by: User Name <br></br>
            Posted at: 23/09/2020
          </div>
          
        </div>

        <div className="details_link ">
          
          This Gas station is very nice
          
        </div>


      </div>
  );
}