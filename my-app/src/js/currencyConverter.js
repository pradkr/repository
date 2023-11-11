import cart from './cart.json' assert { type: "json" };
import currencyRates from './currencyRates.json' assert { type: "json" };
import { renderRows, renderTotals } from './currencyView.js';


const currencyPicker = document.querySelector("select[name='currency-picker']");
currencyPicker.innerHTML = Object.keys(currencyRates)
  .map((key) => `<option>${key}</option>`)
  .join('');
// Your code goes here...
// const computeCart = function () {
//   renderRows(cart);
//   renderTotals(cart);
// };


currencyPicker.innerHTML = Object.keys(currencyRates)
  .map((key) => `<option>${key}</option>`)
  .join('');
//Now comes the core of this exercise - the higher order function. 
//Create the following function right before the computeCart function. 

const computeCart = function () {
  const currency = this?.value;
  currencyConvert(currency, currencyRates, renderRows)(cart);
  currencyConvert(currency, currencyRates, renderTotals)(cart);
};

currencyPicker.addEventListener('change', computeCart);
//Now comes the core of this exercise - the higher order function. Create the following function right before the computeCart function. 
const currencyConvert = (currency, rates, fn) => {
  const conversionRate = rates[currency] ?? 1;
  return (cart) => {
    const revised = cart.map((item) => {
      return {
        ...item,
        cost: item.cost * conversionRate,
      };
    });
    return fn(revised);
  };
};


  
computeCart();
currencyPicker.addEventListener('change', computeCart);
