import './Application.scss';
import useApplicationData from '../hooks/useApplicationData';
import Navbar from './Navbar';
import Gas_price from './Gas_price';

// Using react-router
import { Routes, Route, Link } from "react-router-dom";

const Application = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));

  
  return (<div className="Application" >
    <Navbar>Nav</Navbar>
    <div>
    <h1> Users </h1>
    <ul> {userList} </ul>
    </div>
    <Gas_price></Gas_price>
  </div >
  );
};

export default Application;
