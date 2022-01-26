import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Rating } from '@mui/material';
import { Star } from '@mui/icons-material';

import "./GasPriceItem.scss";
import "./Navbar.scss";

import axios from "axios";


import moment from 'moment';

import { getUserIdFromPriceUpdate, getPriceUpdate, getMostRecentPriceUpdate } from "../helpers/selectors";

export default function GasPriceItem(props) {

  const { stationId, name, rating, address, cityId, phone, regular, ultra, premium, priceUpdates } = props;

  const [userInfo, setUserInfo] = useState();

  const priceUpdate = getMostRecentPriceUpdate(priceUpdates, stationId);
  const GasName = name.split(" ")[0];

  console.log("Updates: ", priceUpdates);

  console.log("MyFirstName: ", userInfo)
  console.log("gas station props", props);


  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/`)
      .then(response => {
        console.log(response.data);
        const priceSubmitUserId = getUserIdFromPriceUpdate(priceUpdates, stationId);
        axios.get(`http://localhost:3001/api/users/${priceSubmitUserId}`)
        .then(response => {
          setUserInfo(response.data);
        })
      })
  }, []);

  return (
    <div className="main_block">
      <div className="details_block">
        <div>
          <img className="gas_station_image" src={`../images/${GasName}.png`} alt="logo" />
        </div>
        <div className="station_details StationDetail">
          <div>
            Name: {name}
          </div>
          <div>
            <Rating
              name="text-feedback"
              value={props.rating}
              readOnly
              precision={0.5}
              emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </div>
          <div>
            Address: {address}<br></br>
          </div>
          <div>
            Phone: {phone}
          </div>
        </div>


        <div className="gas_price StationDetail">
          <div>
            <h5><strong>Regular {regular}</strong></h5>
          </div>

          <div>
            {!userInfo && "Loading..."}
            {userInfo && `Submitted by: ${userInfo.first_name}`}
          </div>
          <div>
            {!priceUpdate && <p>---</p>}
            {priceUpdate && <p>{moment(priceUpdate.created_at).fromNow()}</p>}
          </div>
        </div>
      </div>
      <div className="further_link ">
        <button
          className="button reviewbutton">
          <Link to={`/reviews/${stationId}`}>Details</Link>
        </button>
      </div>
      <Outlet />

    </div>


  );
};