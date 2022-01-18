import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";
import "./Button.scss";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
          <div>
            <img className="Image" src='gas_logo.png'/>
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
          
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;