import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {IndianRupee} from "../utils/FormattedCurrency";
//import {IndianRupee, toIndianCurrency} from "../utils/FormattedCurrency";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div className='small-box'>
      <h4>Balance</h4>
      {/* <h1>{toIndianCurrency(total)}</h1> */}
      <p className='money balance'> {IndianRupee.format(total)}</p>
    </div>
  )
}
