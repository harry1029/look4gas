import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Rating } from '@mui/material';
import { Star } from '@mui/icons-material';

import "./GasPriceItem.scss";
import "./Navbar.scss";

import axios from "axios";

import { useEffect } from "react";

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
        <div className="station_details StationDetail">
            <div>
              Name: {name}
            </div>
            <div>
              <Rating
                name="text-feedback"
                value={rating}
                readOnly
                precision={0.5}
                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
            </div>
            <div>
              Address: { address}, Toronto, ON <br></br>
            </div>
            <div>
              Phone: {phone}
            </div>
          </div>
        
        <div className="gas_price StationDetail">
          <div>
          regular_price: {regular}
          </div>
          <div>
          {!userInfo && <p>Loading...</p>}
          {userInfo && <p>submitted by: {userInfo.first_name}</p>}
          </div>
          <div>
          {!priceUpdate && <p>---</p>}
          {priceUpdate && <p>{priceUpdate.time_ago}</p>}
          </div>
        </div>
      </div>
      <div className="details_link ">
        <button
          className="button reviewbutton">
          <Link to={`/submit_price/${stationId}`}>Submit Price</Link>
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