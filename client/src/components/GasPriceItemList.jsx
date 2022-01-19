import React from "react";
import GasPriceItem from "./GasPriceItem";

export default function GasPriceItemList(props) {

  const { gasStations } = props;

  const parsedGasPriceItem = gasStations.map(x =>
    <GasPriceItem
      key={x.id}
      name={x.name}
      rating={x.rating}
      cityId={x.city_id}
      phone={x.station_phone}
      regular={x.regular_price}
      ultra={x.ultra_price}
      premium={x.premium_price}
      >
    </GasPriceItem>)
  return (
    <ul>
      {parsedGasPriceItem}
    </ul>
  );
}