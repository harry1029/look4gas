import './Application.scss';
import useApplicationData from '../hooks/useApplicationData';
import Navbar from './Navbar';
import GasPriceItem from './GasPriceItem';

// Using react-router
import { Routes, Route, Link } from "react-router-dom";

const Application = () => {
  
  const {
    state
  } = useApplicationData();

  const currentProvinces = state.provinces[0]

  console.log(currentProvinces)
  
  return (<div className="Application" >
    <Navbar/>
    <h1> Users </h1>
    <ul> </ul>
  </div >
  );
};

export default Application;
