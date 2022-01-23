import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";
import "./Button.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { state, setState } = props;
  const navigate = useNavigate();
  console.log("STATE", state.loggedIn);

  const Logout = function () {

    axios.delete("http://localhost:3001/api/logout/", { withCredentials: true })
      .then(response => {
        navigate("/login");
      });
    localStorage.removeItem("user");
    setState(prev => ({ ...prev, loggedIn: false, currentUser: {} }));
    return true;
  }

  return (
    <>
      <nav className="Navbar">
        <div>
          <img className="Image" src='gas_logo.png' alt="logo" />
        </div>

        <div className="Logo">
          <Link to="/"><h1> Look4Gas </h1></Link>

        </div>


        <div className="rightbutton">
          {!state.loggedIn && <button
            className="button">
            <Link to="/login">Login</Link>
          </button>}

          <br></br>

          {!state.loggedIn && <button
            className="button">
            <Link to="/register">Register</Link>
          </button>}
        </div>

        <div>
          {state.loggedIn && <button onClick={Logout}
            className="button">
            Logout
          </button>}

          <br></br>
          <br></br>

          {state.loggedIn &&
            <div className="LoggedInUser">
              <h3>Hi {state.currentUser.first_name}!
              </h3>
            </div>}
        </div>

      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;