import React from 'react';
// import { useState, useContext, useEffect } from 'react';
import { useContext } from 'react';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
// import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import './holygrail.css';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
// import Protected from "./components/Protected";
import ProtectedRoute from './components/ProtectedRoute';
// import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
// import {useSelector} from 'react-redux'
// import store from './store';
import useAuthentication from "./context/useAuthentication";
// import { useHistory, useLocation } from "react-router-dom";


function App() {
  const { AuthCtx } = useAuthentication();
  // const { logIn, user, error, logOut } = useContext(AuthCtx);
  const {  user, error, logOut } = useContext(AuthCtx);
  //const {balance, expense, income, transactions} = useSelector(state => state);
  return (
    <div className='holy-grail-flexbox'>
      <BrowserRouter>
    <GlobalProvider>
      <header className='header'>
        <Header />
        <h1>{error}</h1>
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Sign Up</Link>
        { (!user) ? (      
        <Link to="/login"> Login </Link>
            ) : (
          <div className='logged-in-user-section'>
            <span > {user.name} </span>
            <button onClick={() => logOut()}>Logout</button> 
          </div>
        )}
      </header>  
      <main className='main-content'>
          {/* <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
          </Routes> */}

          <Routes>
            <Route path="/dashboard" exact element={ <Dashboard /> } />
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/home" exact element={<ProtectedRoute />}>
              <Route path="/home" exact element={<IncomeExpenses />}/>
            </Route>
            {/* <Protected user={user} path="/home" element={ } /> */}
            
          </Routes>

      </main>
      <section className='left-sidebar'>
        <TransactionList />
      </section>
      <aside className='right-sidebar'>
        <AddTransaction />
      </aside>
    </GlobalProvider>
    <footer className='footer'>
      <Footer />
    </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
