import './Application.scss';
import useApplicationData from '../hooks/useApplicationData';
import Navbar from './Navbar';
import Gas_price from './Gas_price';

// Using react-router
import { Routes, Route, Link } from "react-router-dom";

const Application = () => {
  
  const {
    state
  } = useApplicationData();

  const stateData = state;




  
  return (<div className="Application" >
    <Navbar>Nav</Navbar>
    <div>
    <h1> Users </h1>
    <ul> {stateData} </ul>
    </div>
    <Gas_price></Gas_price>
  </div >
  );
};

export default Application;
