import GasPriceItemList from "./GasPriceItemList";
import GoogleMapComponent from "./GoogleMapComponent";
import "./Home.scss";

export default function Home(props) {

  const { gasStations, priceUpdates, reviews } = props;

  return (
    <div className="Map">
      <div className="Margin">
        <GasPriceItemList gasStations={gasStations} priceUpdates={priceUpdates} reviews={reviews} />
      </div>
      <div className="MapMeasurement">
        <GoogleMapComponent gasStations={gasStations}></GoogleMapComponent>
      </div>
    </div>
  );
}