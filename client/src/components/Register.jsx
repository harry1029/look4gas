import { useState } from "react";
import "./Login.scss";
import "./Button.scss";

export default function Register() {
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
    <form onSubmit={handleSubmit} className="Login">
      <br></br>
      <h2>Register to Look4Gas</h2>
      <br></br>
      <br></br>

      <div class="form-group">
        <label for="first_name">Enter your First Name:</label>
        <input id="first_name"
          type="text"
          name="first_name"
          value={inputs.first_name || ""}
          onChange={handleChange}
        />
      </div>

      <div class="form-group">
        <label for="last_name">Enter your Last Name:</label>
        <input id="last_name"
          type="text"
          name="last_name"
          value={inputs.last_name || ""}
          onChange={handleChange}
        />
      </div>

      <div class="form-group">
        <label for="email">Enter your email:</label>
        <input id="email"
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </div>

      <div class="form-group">
        <label for="password">Enter your password:</label>
        <input id="password"
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </div>

      <div class="form-group">
        <label for="phone">Enter your Phone:</label>
        <input id="phone"
          type="text"
          name="phone"
          value={inputs.phone || ""}
          onChange={handleChange}
        />
      </div>

      <input type="submit" className="button" />
    </form>
  )
}