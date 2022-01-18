import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  // const [state, dispatch] = useReducer(dataReducer, {
  //     users: [],
  //     loading: true,
  // });
  // useEffect(() => {
  //     axios({
  //             method: 'GET',
  //             url: '/api/users',
  //         })
  //         .then(({
  //             data
  //         }) => {
  //             console.log(data);
  //             dispatch({
  //                 type: SET_USERS,
  //                 users: data
  //             });
  //         })
  //         .catch((err) => console.log(err));
  // }, []);

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    reviews: {},
    cities: {}
  });

  // [] empty only run on first load
  // Initial Data Fetching from the backend
  useEffect(() => {

    // Request all relevent data for initial load
    Promise.all([
      axios.get('http://localhost:3001/api/provinces'),
      axios.get('http://localhost:3001/api/cities'),
      axios.get('http://localhost:3001/api/gas_stations'),
      axios.get('http://localhost:3001/api/reviews'),
      axios.get('http://localhost:3001/api/price_updates')


      // all is an array of ALL the requests
    ]).then((all) => {
      const [first, second, third, forth, fifth] = all;

      setState(prev => ({ ...prev, days: first.data, appointments: second.data, interviewers: third.data }));
      console.log("Refresh!");
    })
  }, [])

  return {
      state,
      dispatch,
  };

};

export default useApplicationData;