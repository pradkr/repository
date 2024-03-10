import React from 'react';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
// import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import './holygrail.css';
// import './expense-tracker-ui.css';

function App() {
  return (
    <div className='holy-grail-flexbox'>
    <GlobalProvider>
      <header className='header'>
        <Header />
      </header>  
      <main className='main-content'>
        <IncomeExpenses />    
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
    </div>
  );
}

export default App;
