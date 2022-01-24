import GasPriceItemList from "./GasPriceItemList";
import GoogleMapComponent from "./GoogleMapComponent";

export default function Home(props) {

  const { gasStations, priceUpdates, reviews } = props;

  return (
    <div>
      <GasPriceItemList gasStations={gasStations} priceUpdates={priceUpdates} reviews={reviews}/>
      <GoogleMapComponent gasStations={gasStations}></GoogleMapComponent>
    </div>
  );
}