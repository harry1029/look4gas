import "./GasPriceItem.scss";
import "./Navbar.scss";

export default function GasPriceItem() {

  return (
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
        <div className="gas_price">
          regular_price: 10 <br></br>
          submitted by: user <br></br>
          2 hours ago <br></br>
        </div>
      </div>
      <div className="details_link">
        Details
      </div>
    </div>


  );
};