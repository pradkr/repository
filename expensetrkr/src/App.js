import React from 'react';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
// import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
// import './expense-tracker-ui.css';

function App() {
  return (
    <div>
    <Header />
    <GlobalProvider>
      <main>
        {/* <Balance /> */}
        <TransactionList />
        <IncomeExpenses />
        <AddTransaction />
      </main>
    </GlobalProvider>
    <Footer />
    </div>
  );
}

export default App;
