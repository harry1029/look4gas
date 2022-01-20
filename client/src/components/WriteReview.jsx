import { useState } from "react";
import { useParams } from "react-router-dom";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import "./Login.scss";
import "./Button.scss";

import { getUser } from "../helpers/loginHelper";

import { useNavigate } from "react-router-dom";

export default function WriteReview(props) {
  console.log ("Props:",props);
  let { id } = useParams();
  console.log("use params WRITE REVIEW", id);
  const gasStation = props.gasStations.find(gasStation => gasStation.id == id);

  const [inputs, setInputs] = useState({ comment: "", user_rating: "", user_id: "", gas_station_id: ""});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value , user_rating: 4, user_id: props.user.id, gas_station_id: gasStation.id}))
    console.log("line 22", inputs);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);

    const url = "http://localhost:3001/api/reviews/";
    axios
      .post(url, inputs)
      .then((res) => {
        console.log(res.data);
        navigate("/reviews");
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <div className="WriteReview">
      <div className="form-group ReviewSubform">
      <div className="details_block Spacing">
        <div>
          <img className="gas_station_image GasImage" src='pioneer.png' />
        </div>
        <div className="station_details">
        Name: {gasStation.name} <br></br>
            Rating: {gasStation.rating} <br></br>
            Address: {gasStation.address}, Toronto, ON <br></br>
            Phone: {gasStation.station_phone}
        </div>
        
      </div>

        <form onSubmit={handleSubmit}>
          <div className="WriteReviewLabel">
            <label>
              Write a short review
            </label>
            
          </div>
          <div>
            <TextareaAutosize
              name="comment"
              value={inputs.comment}
              aria-label="empty textarea"
              placeholder="Write review here"
              style={{ width: 410, height: 200 }}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="hidden" name="gas_station id" value={props.gasStations.id}></input>
            <input type="hidden" name="user_id" value={props.user.id}></input>

            <input type="submit" className="button ReviewButton" />
          </div>


        </form>

      </div>
    </div>


  )
}



/*import { useState } from "react";
import ReactDOM from "react-dom";
import TextareaAutosize from '@mui/base/TextareaAutosize';
export default function WriteReview() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="Navbar">
      <form onSubmit={handleSubmit}>
      
      <label>
        enter review
        <TextareaAutosize
          name="review"
          value={inputs.review}
          aria-label="empty textarea"
          placeholder="Empty"
          style={{ width: 200 }}
          onChange={handleChange}
        />
      </label>
      <input type="hidden" name="gas_station id" value="gas station id"></input>
      <input type="hidden" name="user.first_name" value="username"></input>

      <input type="submit" />
    </form>
    </div>
  )
}

ReactDOM.render(<WriteReview />, document.getElementById('root'));*/