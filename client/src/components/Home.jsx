import GasPriceItemList from "./GasPriceItemList";

export default function Home(props) {

  const { gasStations, priceUpdates } = props;

  return (
    <div>
      <GasPriceItemList gasStations={gasStations} priceUpdates={priceUpdates}/>
    </div>
  );
}