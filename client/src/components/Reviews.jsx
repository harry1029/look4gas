import { Outlet, Link } from "react-router-dom";
import "./Reviews.scss";
import "./Button.scss";
import "./GasPriceItem.scss";
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
            <Link to="/reviews">Reviews</Link>
          </button>
        </div>

      </div>
      <Outlet />
    </>
    
      
  );
}