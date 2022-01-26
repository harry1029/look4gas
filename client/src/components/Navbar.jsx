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
          <img className="Image" src='gas_logo.png' />
        </div>

        <div className="Logo">
          <Link to="/"><h1> Look4Gas </h1></Link>

        </div>

        <div className="rightbutton">
          <div >
            {!state.loggedIn && <button
              className="button">
              <Link to="/login">Login</Link>
            </button>}
          </div>
          <div>
              {state.loggedIn && <button onClick={Logout}
                className="button">
                Logout
              </button>}
            </div>
          
          <div className="rightbutton">
            
          <div>
            {!state.loggedIn && <button
              className="button">
              <Link to="/register">Register</Link>
            </button>}
          </div>

          <div className="LoggedInUser">
            {state.loggedIn &&
                `Hi ${state.currentUser.first_name}!`
                }
              </div>
          </div>
        </div>


      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;