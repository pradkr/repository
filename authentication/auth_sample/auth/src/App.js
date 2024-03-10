// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import useToken from './components/App/useToken';

// move setToken and getToken to a custom Hook useToken
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token //when you first access the application, the value of sessionStorage.getItem('token') will be undefined
// }

function App() {
  //const [token, setToken] = useState();
  //const token = getToken();
  const { token, setToken } = useToken();
  //console.log('inside App.js, token='+ JSON.stringify(token))
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={ <Dashboard/> } />
          <Route path="/preferences" element={<Preferences /> } />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;