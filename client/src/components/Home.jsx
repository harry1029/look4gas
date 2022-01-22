import GasPriceItemList from "./GasPriceItemList";

export default function Home(props) {

  const { gasStations, priceUpdates, reviews } = props;

  return (
    <div>
      <GasPriceItemList gasStations={gasStations} priceUpdates={priceUpdates} reviews={reviews}/>
    </div>
  );
}