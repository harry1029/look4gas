import { Outlet, Link } from "react-router-dom";
import "./Reviews.scss";
import "./Button.scss";
import "./GasPriceItem.scss";
import ReviewItem from "./ReviewItem";
export default function Reviews() {

  return (
    <>
      <div className="main_block">
        <div className="details_block">
          <div>
            <img className="gas_station_image" src='pioneer.png' />
          </div>
          <div className="station_details">
            name: 123 GasStation <br></br>
            rating: 5.0 <br></br>
            address: 123 Test street <br></br>
            station_phone: #123
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
            <Link to="/write_review">Write Review</Link>
          </button>
        </div>

      </div>

      <div className="main_block">
        <div className="details_block">
          <div className="station_details">
            <h2> price ultra </h2>
          </div>
          <div className="station_details">
            <h2> price ultra </h2>
          </div>

          <div className="station_details">
            <h2> price premium </h2>
          </div>
        </div>
        </div>

        <ReviewItem />
      <Outlet />
    </>


  );
}