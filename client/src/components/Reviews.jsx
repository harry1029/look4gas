import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Rating } from '@mui/material';
import { Star } from '@mui/icons-material';
import moment from "moment";
import "./Reviews.scss";
import "./Button.scss";
import "./GasPriceItem.scss";
import { useParams } from "react-router-dom";
import ReviewItemList from "./ReviewItemList";

import { calculateRating } from "../helpers/ratingHelper";

import axios from "axios";

import { getUserIdFromPriceUpdate, getPriceUpdate, getMostRecentPriceUpdate } from "../helpers/selectors";

export default function Reviews(props) {

  const { gasStations, priceUpdates, reviews, state, setState } = props;

  const [userInfo, setUserInfo] = useState();

  let { id } = useParams();
  const gasStation = props.gasStations.find(gasStation => gasStation.id == id);

  const priceUpdate = getMostRecentPriceUpdate(priceUpdates, id);
  console.log("STATE LINE 26", state);

  console.log({priceUpdate});
  gasStation.rating = calculateRating(gasStation, reviews)
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/`)
      .then(response => {
        console.log(" RESPONE DATA",response.data);
        console.log({priceUpdates, id});
        const priceSubmitUserId = getUserIdFromPriceUpdate(priceUpdates, id);
        console.log({priceSubmitUserId});
        axios.get(`http://localhost:3001/api/users/${priceSubmitUserId}`)
        .then(response => {
          setUserInfo(response.data);
        }).catch((err) => console.log("Error", err));
      }).catch((err) => console.log("Error", err));
  }, [priceUpdates]);

  return (
    <>
      <div className="PriceBlock">
        <div className="details_block">
          <div>
            <img className="gas_station_image" src='../pioneer.png' alt="image"/>
          </div>
          <div className="station_details StationDetail">
            <div>
              Name: {gasStation && gasStation.name}
            </div>
            <div>
            {gasStation && <Rating
                name="text-feedback"
                value={gasStation.rating}
                readOnly
                precision={0.5}
                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
              />}
            </div>
            <div>
              Address: {gasStation && gasStation.address}, Toronto, ON <br></br>
            </div>
            <div>
              Phone: {gasStation && gasStation.station_phone}
            </div>
          </div>

        </div>

        {state.loggedIn && <div className="details_link ">
          <button
            className="button reviewbutton">
            <Link to={`/submit_price/${id}`}>Submit Price</Link>
          </button>

          <br></br>

          <button
            className="button reviewbutton">
            <Link to={`/write_review/${id}`}>Write Review</Link>
          </button>
        </div>}

      </div>

      <div className="PriceBlock">
        <div className="PriceHeadings">
          <div className="StationPrice center">
            Regular
          </div>
          <div className="StationPrice center ">
            Ultra
          </div>
          <div className="StationPrice center">
            Premium
          </div>
        </div>
        <div>
          <div className="details_block ">
            <div className="StationPrice BorderRight center">
              <h2> {gasStation && gasStation.regular_price} </h2>
            </div>
            <div className="StationPrice BorderRight center">
              <h2> {gasStation && gasStation.ultra_price} </h2>
            </div>
            <div className="StationPrice center">
              <h2> {gasStation && gasStation.premium_price} </h2>
            </div>
          </div>

          <div className="PriceHeadings">
            <div className="StationPrice center ">
            {!userInfo && <p>Loading...</p>}
            {userInfo && <p>{userInfo.first_name}</p>}
            {!priceUpdate && <p>---</p>}
            {priceUpdate && <p>{moment(priceUpdate.created_at).fromNow()}</p>}
            </div>
            <div className="StationPrice center ">
            {!userInfo && <p>Loading...</p>}
            {userInfo && <p>{userInfo.first_name}</p>}
            {!priceUpdate && <p>---</p>}
            {priceUpdate && <p>{moment(priceUpdate.created_at).fromNow()}</p>}
            </div>
            <div className="StationPrice center">
            {!userInfo && <p>Loading...</p>}
            {userInfo && <p>{userInfo.first_name}</p>}
            {!priceUpdate && <p>---</p>}
            {priceUpdate && <p>{moment(priceUpdate.created_at).fromNow()}</p>}
            </div>
          </div>
        </div>

      </div>

      <ReviewItemList stationId={id} reviews={reviews} />
      <Outlet />
    </>


  );
}