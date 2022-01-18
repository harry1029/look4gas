import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";
import "./Button.scss";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
          <div>
            <img className="Image" src='gas_logo.png' width={182} height={64} />
          </div>

          <div className="Logo">
            <h1> Look4Gas </h1>
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
          
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;