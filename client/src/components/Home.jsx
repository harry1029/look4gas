import GasPriceItemList from "./GasPriceItemList";
import GoogleMapComponent from "./GoogleMapComponent";
import "./Home.scss";

export default function Home(props) {

  const { gasStations, priceUpdates, reviews } = props;

  return (
    <div className="home">
      <div className="stations">
        <GasPriceItemList gasStations={gasStations} priceUpdates={priceUpdates} reviews={reviews} />
      </div>
      <div className="map">
        <GoogleMapComponent gasStations={gasStations}></GoogleMapComponent>
      </div>
    </div>
  );
}