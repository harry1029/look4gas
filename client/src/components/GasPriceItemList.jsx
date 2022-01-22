import React from "react";
import GasPriceItem from "./GasPriceItem";

export default function GasPriceItemList(props) {

  const { gasStations, priceUpdates, reviews } = props;

  const sortedGasStations = gasStations.sort((a, b) => {
    return a.regular_price - b.regular_price;
  })

  const parsedGasPriceItem = sortedGasStations.map(x =>
    <GasPriceItem
    key={x.id}
    stationId={x.id}
    name={x.name}
    rating={x.rating}
    address={x.address}
    cityId={x.city_id}
    phone={x.station_phone}
    regular={x.regular_price}
    ultra={x.ultra_price}
    premium={x.premium_price}
    priceUpdates={priceUpdates}
    >
  </GasPriceItem>
)

  return (
    <ul>
      {parsedGasPriceItem}
    </ul>
  );
}