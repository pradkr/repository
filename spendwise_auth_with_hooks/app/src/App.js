// import Login from './components/Login'
// // import Protected from "./components/Protected";
// import ProtectedRoute from './components/ProtectedRoute';
// // import {useSelector} from 'react-redux'
// // import store from './store';
//   //const {balance, expense, income, transactions} = useSelector(state => state);
// import useAuthentication from "./context/useAuthentication";
// // import { useHistory, useLocation } from "react-router-dom";
// function App() {
//   // const { AuthCtx } = useAuthentication();
//   // // const { logIn, user, error, logOut } = useContext(AuthCtx);
//   // const {  user, error, logOut } = useContext(AuthCtx);

// import Dashboard from './components/Dashboard/Dashboard';
//import ProtectedRoute from './components/ProtectedRoute';

import React, {useState, useEffect} from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import { GlobalProvider } from './context/GlobalState';
import SignUp from './components/SignUp'
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { IncomeExpenses } from './components/IncomeExpenses';
import {Footer} from './components/Footer';
import useToken from './components/App/useToken';
import './App.css';
import './holygrail.css';
// import { useNavigate } from 'react-router-dom'
//import jwt from 'jsonwebtoken'
//import { InvalidTokenError, jwtDecode} from 'jwt-decode'
import { jwtDecode} from 'jwt-decode'

function App() {
  const { token, setToken, deleteToken } = useToken();
  const [ userEmail, setUserEmail ] = useState();
  //console.log('inside App.js, token='+ JSON.stringify(token))
  //console.log('in app.js and token=', token)
  //const navigate = useNavigate();

  const isTokenExpired = (insertedAtDate) =>{
    const current_time_secs = Date.now() / 1000;  //Date.now gives milliseconds 
    const secondsInOneWeek = 604800;
    //const secondsInOneHour = 3600;
    if( insertedAtDate < current_time_secs - secondsInOneWeek ) {
      console.log('Token Expired.');
      // localStorage.removeItem("token");
      // navigate('/login', { replace: true })
      return true;
    }
    return false;
  }
  
  useEffect(() => {
    //const token = localStorage.getItem('token');
    const token = sessionStorage.getItem('token');
    console.log('in useEffect, token='+JSON.stringify(token));
    if (token) {
      try {
        const user = jwtDecode(token, {header: false})
        // valid token format
        if (!user || isTokenExpired(user.iat)) {
          logOut()
          sessionStorage.removeItem('token')
          //navigate('/login', { replace: true })
        } else {
          console.log('decoded token='+ JSON.stringify(user))
          //populateQuote()
          setUserEmail(user.email);
          console.log('user.email=' + user.email)
          
        }
      } catch(error) {
        //InvalidTokenError
        console.log('Invalid token. ' + error + ''+ JSON.stringify(error) )
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token,userEmail])
  
   function logOut() {
    setToken(null);
    setUserEmail(null)
    //sessionStorage.removeItem(keyname);
    deleteToken()
  }

  // if(!token) {
  //   return (
  //     <div>
  //       <Login setToken={setToken} />
  //       <Register />
  //   </div>
  //   )
  // }

  return (
    <div className='holy-grail-flexbox'>
    
      {/* <h1>Application </h1> */}
      <BrowserRouter>
      <GlobalProvider>
        <header className='header'>
          <Header />
          {/* <h1 className='truncate'>Hello {token}</h1> */}
          {/* <h1>{error}</h1> */}
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/register">Sign Up</Link>
          {/* <Link to="/login">Login</Link> */}
          { (!token) ? (      
          <Link to="/login"> Login </Link>
             ) : (
           <div className='logged-in-user-section'>
            <div className='truncate'>Hello {token}</div>
             {/* <span > {user.name} </span> */}
             <button onClick={() => logOut()}>Logout</button> 
           </div>
          )}
        </header> 

      <main className='main-content'>
{ (token) ? ( <IncomeExpenses /> ) 
: ( 
        <Routes>
          <Route path="/" exact element={<Login setToken={setToken} />} />
          {/* <Route path="/dashboard" exact element={ <Dashboard /> } /> */}
          <Route path="/register" exact element={<SignUp setToken={setToken} />} />
          <Route path="/login" exact element={<Login setToken={setToken} />} />
          {/* <Route path="/home" exact element={<Protected user={token}/>}>
            <Route path="/home" exact element={<IncomeExpenses />}/>
          </Route> */}

        </Routes>
) }
        
      </main>

{ (userEmail) ? ( 
       <section className='left-sidebar'>
         <TransactionList email={userEmail} />
       </section>
): null }
{ (userEmail) ? (   
       <aside className='right-sidebar'>
         <AddTransaction email={userEmail}/>
       </aside>
): null }
     </GlobalProvider>
     <footer className='footer'>
       <Footer />
     </footer>    
      </BrowserRouter>
    </div>
  );
}

export default App;