import React from 'react';

import Login from './Login.js';
import Register from './Register.js';
import NavBar from './NavBar';

const Routes = () => (
  <App>
    <NavBar />
    <Login  exact path="/login" />
    <Register path="/register" />
  </App>
);

export default Routes;