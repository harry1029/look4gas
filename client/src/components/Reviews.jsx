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

import axios from "axios";

import { getUserIdFromPriceUpdate, getPriceUpdate, getMostRecentPriceUpdate } from "../helpers/selectors";

export default function Reviews(props) {

  const { gasStations, priceUpdates, reviews, setState } = props;

  const [userInfo, setUserInfo] = useState();

  console.log("Review props", props);
  let { id } = useParams();
  console.log("use params", id);
  const gasStation = props.gasStations.find(gasStation => gasStation.id == id);

  console.log("props gas station", props.gasStations);
  console.log("found gas station", gasStation);

  const priceUpdate = getMostRecentPriceUpdate(priceUpdates, id);

  const time = "2022-01-19 17:34:23.199108";
  const timeago = moment('Thu Oct 25 2018 17:30:03 GMT+0300').fromNow();

  console.log("time ago:", timeago);


  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/`)
      .then(response => {
        console.log(response.data);
        const priceSubmitUserId = getUserIdFromPriceUpdate(priceUpdates, id);
        axios.get(`http://localhost:3001/api/users/${priceSubmitUserId}`)
        .then(response => {
          setUserInfo(response.data);

        })
      })
  }, []);

  return (
    <>
      <div className="PriceBlock">
        <div className="details_block">
          <div>
            <img className="gas_station_image" src='../../public/pioneer.png' alt="image"/>
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

        <div className="details_link ">
          <button
            className="button reviewbutton">
            <Link to={`/submit_price/${id}`}>Submit Price</Link>
          </button>

          <br></br>

          <button
            className="button reviewbutton">
            <Link to={`/write_review/${id}`}>Write Review</Link>
          </button>
        </div>

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
            <div className="StationPrice center">
            {!userInfo && <p>Loading...</p>}
            {userInfo && <p>{userInfo.first_name}</p>} <br></br> <br></br>
            {!priceUpdate && <p>---</p>}
            {priceUpdate && <p>{moment(priceUpdate.created_at).fromNow()}</p>}
            </div>
            <div className="StationPrice center ">
            {!userInfo && <p>Loading...</p>}
            {userInfo && <p>{userInfo.first_name}</p>} <br></br> <br></br>
            {!priceUpdate && <p>---</p>}
            {priceUpdate && <p>{moment(priceUpdate.created_at).fromNow()}</p>}
            </div>
            <div className="StationPrice center">
            {!userInfo && <p>Loading...</p>}
            {userInfo && <p>{userInfo.first_name}</p>} <br></br>
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