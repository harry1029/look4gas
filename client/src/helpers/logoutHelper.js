import axios from "axios";
import { useNavigate } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";

export function Logout() {
  const navigate = useNavigate();
  const [state, setState] = useApplicationData();

  axios.delete("http://localhost:3001/api/logout/", { withCredentials: true })
    .then(response => {
      navigate("/login");
    });
  Storage.removeItem("user")
  setState(prev => ({ ...prev, loggedIn: false, currentUser: {}}));
  return true;
}