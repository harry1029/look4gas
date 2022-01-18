import './Application.scss';
import useGasStationData from '../hooks/useGasStationData';
import Navbar from './Navbar';
import GasPriceItem from './GasPriceItem';

// Using react-router
import { Routes, Route, Link } from "react-router-dom";

const Gas_station_list = () => {
  const {
    state,
    dispatch
  } = useGasStationData();
// <ul> {gas_stationsList} </ul>
    
  //const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  //const stationsList = state.gas_stations.map((gas_stations) => (<li key={gas_stations.name} > {gas_stations.rating} {gas_stations.address} {gas_stations.city_id} {gas_stations.station_phone} {gas_stations.regular_price} {gas_stations.ultra_price} {gas_stations.premium_price} </li>
  
  //));

  
  return (<div className="Application" >
    
    <hi> Gas Station List </hi>.
    
    <ul></ul>
   
  </div >
  );
};

export default Gas_station_list;
