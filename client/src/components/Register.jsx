import { useState } from "react";
import "./Login.scss";
import "./Button.scss";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [info, setInfo] = useState({ first_name: "", last_name: "", email: "", password: "", phone: "" });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo(values => ({ ...values, [name]: value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info);

    const url = "http://localhost:3001/api/users/";
    axios
      .post(url, info, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
      <form onSubmit={handleSubmit} className="Login MarginLogin RegisterBlock">
        <br></br>
        <h2>Register to Look4Gas</h2>
        <br></br>

        <div class="form-group">
          <label for="first_name">Enter your First Name:</label>
          <input id="first_name"
            type="text"
            name="first_name"
            value={info.first_name || ""}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label for="last_name">Enter your Last Name:</label>
          <input id="last_name"
            type="text"
            name="last_name"
            value={info.last_name || ""}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label for="email">Enter your email:</label>
          <input id="email"
            type="text"
            name="email"
            value={info.email || ""}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label for="password">Enter your password:</label>
          <input id="password"
            type="password"
            name="password"
            value={info.password || ""}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label for="phone">Enter your Phone:</label>
          <input id="phone"
            type="text"
            name="phone"
            value={info.phone || ""}
            onChange={handleChange}
          />
        </div>

        <input type="submit" className="button" />
      </form>

  )
}