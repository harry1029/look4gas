import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_GAS_STATIONS
} from '../reducer/data_reducer';
import axios from 'axios';

const useGasStationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    gas_station: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/gas_stations',
    })
      .then(({
        data
      }) => {
        console.log(data);
        dispatch({
          type: SET_GAS_STATIONS,
          gas_stations: data
        });
      })
      .catch((err) => console.log(err));

      
  }, []);

  

return {
  state,
  dispatch,
};
};

export default useGasStationData;