import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./GasPriceItem.scss";
import "./Navbar.scss";

import axios from "axios";

import { useEffect } from "react";

import moment from 'moment';

import { getUserIdFromPriceUpdate, getPriceUpdate } from "../helpers/selectors";

export default function GasPriceItem(props) {

  const { stationId, name, rating, address, cityId, phone, regular, ultra, premium, priceUpdates } = props;

  const [userInfo, setUserInfo] = useState();


  console.log("Updates: ", priceUpdates);
  const priceSubmitUserId = getUserIdFromPriceUpdate(priceUpdates, stationId);

  const priceUpdate = getPriceUpdate(priceUpdates, stationId)



  console.log("MyFirstName: ", userInfo)
  console.log("gas station props", props);

  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${priceSubmitUserId}`)
    .then(response => {
      setUserInfo(response.data);
      console.log(response.data)
    });
  }, []);

  return (
    <div className="main_block">
      <div className="details_block">
        <div>
          <img className="gas_station_image" src='pioneer.png' />
        </div>
        <div className="station_details rows">
          name: {name} <br></br>
          rating: {rating} <br></br>
          address: {address} <br></br>
          station_phone: {phone}
        </div>
        <div className="gas_price">
          regular_price: {regular} <br></br>
          {!userInfo && <p>Loading...</p>}
          {userInfo && <p>submitted by: {userInfo.first_name}</p>} <br></br>
          {!priceUpdate && <p>---</p>}
          {priceUpdate && <p>{moment(priceUpdate.created_at).fromNow()}</p>} <br></br>
        </div>
      </div>
      <div className="details_link ">
        <button
          className="button reviewbutton">
          <Link to="/submit_price">Submit Price</Link>
        </button>

        <br></br>

        <button
          className="button reviewbutton">
          <Link to={`/reviews/${stationId}`}>Details</Link>
        </button>
      </div>
    <Outlet />

    </div>


  );
};