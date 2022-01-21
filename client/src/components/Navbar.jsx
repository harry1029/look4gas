import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";
import "./Button.scss";
import axios from "axios";
import {Logout} from "../helpers/logoutHelper"
import { useNavigate } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";

const Navbar = (props) => {
  const {setState} = props;
  const navigate = useNavigate();

  const Logout = function() {
  
    axios.delete("http://localhost:3001/api/logout/", { withCredentials: true })
      .then(response => {
        navigate("/login");
      });
      localStorage.removeItem("user");
    setState(prev => ({ ...prev, loggedIn: false, currentUser: {}}));
    return true;
  }
  
  return (
    <>
      <nav className="Navbar">
        <div>
          <img className="Image" src='gas_logo.png' />
        </div>

        <div className="Logo">
          <Link to="/"><h1> Look4Gas </h1></Link>

        </div>


        <div className="rightbutton">
          <button
            className="button">
            <Link to="/login">Login</Link>
          </button>

          <br></br>

          <button
            className="button">
            <Link to="/register">Register</Link>
          </button>
        </div>

        <div>
          <button onClick={Logout}
            className="button">
            Logout
          </button>
        </div>

      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;