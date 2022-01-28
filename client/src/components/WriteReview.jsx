import { useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from '@mui/material';
import { Star } from '@mui/icons-material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import "./Login.scss";
import "./Button.scss";

import { useNavigate } from "react-router-dom";

export default function WriteReview(props) {
  const { setState } = props;

  let { id } = useParams();
  const gasStation = props.gasStations.find(gasStation => gasStation.id == id);

  const [inputs, setInputs] = useState({ comment: "", user_rating: "", user_id: "", gas_station_id: "" });

  const navigate = useNavigate();
  const GasName = gasStation.name.split(" ")[0];

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value, user_id: props.user.id, gas_station_id: gasStation.id }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://localhost:3001/api/reviews";
    axios
      .post(url, inputs)
      .then((res) => {
        axios
          .get(url, inputs)
          .then((res) => {
            setState(prev => ({ ...prev, reviews: res.data }));

            navigate(`/reviews/${gasStation.id}`);
          })
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="BgColor">
      <div className="WriteReview MarginReview">
        <div className="form-group ReviewSubform">
          <div className="details_block Spacing">
            <div>
              <img className="gas_station_image GasImage" src={`../images/${GasName}.png`} alt="logo" />
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

          <form onSubmit={handleSubmit}>
            <div className="WriteReviewLabel">
              <label>
                Write a short review
              </label>
              <Rating
                name="user_rating"
                value={inputs.user_rating}
                precision={0.5}
                defaultValue={2.5}
                onChange={handleChange}
              />
            </div>

            <div className="TextAreaCenter">
              <TextareaAutosize
                name="comment"
                value={inputs.comment}
                aria-label="empty textarea"
                placeholder="Write review here"
                style={{ width: 410, height: 200 }}
                onChange={handleChange}
              />
            </div>
            <div className="TextAreaCenter">
              <input type="hidden" name="gas_station id" value={props.gasStations.id}></input>
              <input type="hidden" name="user_id" value={props.user.id}></input>

              <input type="submit" className="button ReviewButton " />
            </div>


          </form>

        </div>
      </div>

    </div>


  )
}