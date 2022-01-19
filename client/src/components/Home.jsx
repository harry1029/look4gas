import GasPriceItemList from "./GasPriceItemList";

export default function Home(props) {

  const { gasStations, priceUpdates } = props;

  return (
    <h1>
      Home Page
      <GasPriceItemList gasStations={gasStations} priceUpdates={priceUpdates}/>
    </h1>
  );
}