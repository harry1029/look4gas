import { useState } from "react";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import "./Login.scss";
import "./Button.scss";

import { getUser } from "../helpers/loginHelper";

import { useNavigate } from "react-router-dom";

export default function WriteReview() {
  const [inputs, setInputs] = useState({ review: '' });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);

    const input = inputs.review;


  }

  return (
    <div className="WriteReview">
      <div className="form-group">
        <form onSubmit={handleSubmit}>

          <label>
            enter review
            <TextareaAutosize
              name="review"
              value={inputs.review}
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 400, height: 200 }}
              onChange={handleChange}
            />
          </label>
          <input type="hidden" name="gas_station id" value="gas station id"></input>
          <input type="hidden" name="user.first_name" value="username"></input>

          <input type="submit" className="button" />
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