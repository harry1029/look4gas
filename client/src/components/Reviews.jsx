import { Outlet, Link } from "react-router-dom";
import moment from "moment";
import "./Reviews.scss";
import "./Button.scss";
import "./GasPriceItem.scss";
import { useParams } from "react-router-dom";
import ReviewItem from "./ReviewItem";
export default function Reviews(props) {
  console.log("Review props", props);
  let { id } = useParams();
  console.log("use params", id);
  const gasStation = props.gasStations.find(gasStation => gasStation.id == id);
  console.log("props gas station", props.gasStations);
  console.log("found gas station", gasStation);
  const time = "2022-01-19 17:34:23.199108";
  const timeago = moment('Thu Oct 25 2018 17:30:03 GMT+0300').fromNow();
  console.log("time ago:", timeago);

  return (
    <>
      <div className="main_block">
        <div className="details_block">
          <div>
            <img className="gas_station_image" src='pioneer.png' />
          </div>
          <div className="station_details">
            Name: {gasStation.name} <br></br>
            Rating: {gasStation.rating} <br></br>
            Address: {gasStation.address}, Toronto, ON <br></br>
            Phone: {gasStation.station_phone}
          </div>

        </div>

        <div className="details_link ">
          <button
            className="button reviewbutton">
            <Link to="/submit_price">Submit Price</Link>
          </button>

          <br></br>

          <button
            className="button reviewbutton">
            <Link to={`/write_review/${id}`}>Write Review</Link>
          </button>
        </div>

      </div>

      <div className="PriceBlock">
        <div className="PriceHeadings">
          <div className="StationPrice center">
            Regular
          </div>
          <div className="StationPrice center ">
            Ultra
          </div>
          <div className="StationPrice center">
            Premium
          </div>
        </div>
        <div>
          <div className="details_block ">
            <div className="StationPrice BorderRight center">
              <h2> 139 </h2>
            </div>
            <div className="StationPrice BorderRight center">
              <h2> 149 </h2>
            </div>
            <div className="StationPrice center">
              <h2> 160 </h2>
            </div>
          </div>

          <div className="PriceHeadings">
            <div className="StationPrice center">
              User3 <br></br> <br></br>
              2 hours ago
            </div>
            <div className="StationPrice center ">
              User3 <br></br> <br></br>
              2 hours ago
            </div>
            <div className="StationPrice center">
              User3 <br></br> <br></br>
              2 hours ago
            </div>
          </div>
        </div>

      </div>

      <ReviewItem />
      <Outlet />
    </>


  );
}