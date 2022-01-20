import { useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from '@mui/material';
import { Star } from '@mui/icons-material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import "./Login.scss";
import "./Button.scss";
import { getUser } from "../helpers/loginHelper";
import { useNavigate } from "react-router-dom";

export default function SubmitPrice(props) {
  let { id } = useParams();
  console.log("use params WRITE REVIEW", id);
  const gasStation = props.gasStations.find(gasStation => gasStation.id == id);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }


  return (
    <div className="WriteReview">
      <div className="form-group ReviewSubform">
        <div className="details_block Spacing">
          <div>
            <img className="gas_station_image GasImage" src='pioneer.png' alt="image" />
          </div>
          <div className="station_details StationDetail">
            <div>
              Name: {gasStation && gasStation.name}
            </div>
            <div>
              <Rating
                name="text-feedback"
                value={gasStation.rating}
                readOnly
                precision={0.5}
                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
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
      
    <form onSubmit={handleSubmit}>

      
      <label>Enter Regular Price:
      <input 
        type="number" 
        name="regular_price" 
        value={inputs.regular_price || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter Ultra Price:
        <input 
          type="number" 
          name="ultra_price" 
          value={inputs.ultra_price || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Premium Price:
      <input 
        type="number" 
        name="premium_price" 
        value={inputs.premium_price || ""} 
        onChange={handleChange}
      />
      </label>
        <input type="submit" />
    </form>


    </div>
  );
}