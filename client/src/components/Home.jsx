import GasPriceItemList from "./GasPriceItemList";

export default function Home(props) {

  const { gasStations } = props;

  return (
    <h1>
      Home Page
      <GasPriceItemList gasStations={gasStations}/>
    </h1>
  );
}