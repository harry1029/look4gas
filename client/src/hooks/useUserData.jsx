import {
  useEffect,
} from 'react';
import axios from 'axios';

const useUserData = async () => {

  let userData;

  useEffect(() => {
    await axios({
      method: 'GET',
      url: 'http://localhost:3001/api/users',
    })
      .then(({
        data
      }) => {
        console.log(data);
        userData = data;
      })
      .catch((err) => console.log(err));
  }, []);



  return userData;
};

export default useUserData;