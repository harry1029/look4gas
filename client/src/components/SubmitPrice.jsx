import { useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from '@mui/material';
import { Star } from '@mui/icons-material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import "./Login.scss";
import "./SubmitPrice.scss"
import "./Button.scss";
import { getUser } from "../helpers/loginHelper";
import { useNavigate } from "react-router-dom";

export default function SubmitPrice(props) {

  const { user } = props;

  let { id } = useParams();
  console.log("use params WRITE REVIEW", id);
  const gasStation = props.gasStations.find(gasStation => gasStation.id == id);
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    // const url = `http://localhost:3001/api/gas_stations/${gasStation.id}`;
    // axios
    //   .patch(url, inputs)
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate(`/reviews/${gasStation.id}`);
    //     window.location.reload();
    //   })
    //   .catch((err) => console.log(err));

    Promise.all([
      axios.post(`http://localhost:3001/api/price_updates`, {user_id: user.id, gas_station_id: gasStation.id}),
      axios.patch(`http://localhost:3001/api/gas_stations/${gasStation.id}`, inputs)
      
      // all is an array of ALL the requests
    ]).then((all) => {
      const [first, second] = all;

      navigate(`/reviews/${gasStation.id}`);
      window.location.reload();

      // setState(prev => ({ ...prev, provinces: first.data, cities: second.data, gasStations: third.data, reviews: forth.data, priceUpdates: fifth.data }));
      // console.log("State Updates: ", state.priceUpdates)
    })
    .catch((err) => console.log(err));
  }


  return (
    <div className=" PriceMain WriteReview ">
      <div className="form-group ReviewSubform">
        <div className="details_block Spacing">
          <div>
            <img className="gas_station_image GasImage" src='pioneer.png' alt="image" />
          </div>
          <div className="PriceSubmit">
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
      </div>
      
    <form onSubmit={handleSubmit} className="PriceSubmit">

      
      <label className="PriceSubmit"><h4><strong>Regular Price:</strong></h4>
      <input 
        type="number" 
        name="regular_price" 
        value={inputs.regular_price || ""} 
        onChange={handleChange}
      />
      </label>
      <label className="PriceSubmit"><h4><strong>Ultra Price:</strong></h4>
        <input 
          type="number" 
          name="ultra_price" 
          value={inputs.ultra_price || ""} 
          onChange={handleChange}
        />
        </label>
        <label className="PriceSubmit"><h4><strong>Premium Price:</strong></h4>
      <input 
        type="number" 
        name="premium_price" 
        value={inputs.premium_price || ""} 
        onChange={handleChange}
      />
      </label>
        <input type="submit" className="button reviewbutton" />
    </form>


    </div>
  );
}