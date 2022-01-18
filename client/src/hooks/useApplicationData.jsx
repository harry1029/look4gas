import { useState, useEffect } from "react";
import axios from 'axios';

import dataReducer, {
  SET_USERS
} from '../reducer/data_reducer';

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

  // Initialize state data with useState here
  const [state, setState] = useState({
    provinces: {},
    cities: {},
    gas_stations,
    reviews: {},
    price_updates: {}

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

      setState(prev => ({ ...prev, provinces: first.data, cities: second.data, gas_stations: third.data, reviews: forth.data, prices_updates: fifth.data }));
      console.log("Refresh!");
    })
  }, [])

  console.log(state)

  // Return all state after initialization => components/Application.jsx
  return {
      state
  };

};

export default useApplicationData;