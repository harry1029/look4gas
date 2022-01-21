import { useState } from "react";
import axios from "axios";
import "./Login.scss";
import "./Button.scss";
import useApplicationData from "../hooks/useApplicationData";

import { getUser } from "../helpers/loginHelper";

import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const { setState } = props;
  const [user, setUser] = useState({ email: '', password: ''});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    const email = user.email;
    const pass = user.password;

    const url = "http://localhost:3001/api/users";
    await axios
      .get(url)
      .then((res) => {
        const result = getUser(res.data, email, pass);
        console.log("Result: ", result);
        if (!result) {
          console.log("User does not exist!")
        } else {
          setUser(result);
          // User local storage to set key: user, with a user value if found
          localStorage.setItem("user", JSON.stringify(result));
          setState(prev => ({ ...prev, loggedIn: true, currentUser: result}));
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit} className="Login">
      <br></br>
      <h2>Login to Look4Gas</h2>
      <br></br>
      <br></br>
      <div className="form-group">
      <label for="email">Enter your email:</label>
      <input  
        id="email"
        type="text" 
        name="email" 
        value={user.email || ""} 
        onChange={handleChange}
      />
      
      </div>
      <div className="form-group">
      <label for="password">Enter your password:</label>
        <input  id="password"
          type="password" 
          name="password" 
          value={user.password || ""} 
          onChange={handleChange}
        />
        
        </div>
        <input type="submit" className="button"/>
    </form>
  )
}