// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// If you do not require a simulated backend, you can remove the code shown below.

// const apiStatus = document.querySelector('#api-status');

// if (import.meta.env.DEV) {
//   import('../api/browser')
//     .then(({ worker }) => worker.start())
//     .then(() => fetch('/'))
//     .then((res) => res.json())
//     .then((res) => (apiStatus.innerText = res.message));
// }

'use strict';
var pi = 3.1412;
console.log(pi);
var numOfEpisodes = 22;
var costOfMilkShake = 12.60;
var distanceToTheMoon = 384400;
var distanceToTheSun = 149600000;  //149_600_000;
var massOfSun = 1.989e30;
console.log(typeof massOfSun);

let discount=10; //%
let price = 100; //INR
let tax = 8; //%
let totalPrice = price - (price*discount/100) + (price*tax/100);
console.log("Total price is: " + totalPrice);

'use strict';
var septillion = 1_000_000_000_000_000_000_000_000n
var plusOne = septillion + 3n
console.log('septillion plus one is equal to', plusOne)



let Arr = [11,22,"hi"]
console.log(Arr[2])

////////////////////////////////////////////
var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
      city: 'New York',
      country: 'US',
    },
  };

user.isAdmin = false;

//dot notation (it cannot be used if property name has be calculated first such as a=name; user.a;)
console.log('User: ', user.name);
console.log('City: ', user.location.city);
console.log('Age: ', user.age);
console.log('Is User an Administrator?', user.isAdmin);
//bracket notation
console.log('User: ', user["name"]);
console.log('City: ', user["location"]["city"]);
console.log('Age: ', user["age"]);
console.log('Is User an Administrator?', user["isAdmin"]);

/////////////////////////

var bestsellers = [
    'Contact',
    'Deception Point',
    'Digital Fortress',
    'Jurassic Park',
    'Shantaram',
];

console.log('Bestsellers: ', bestsellers.toString());
bestsellers.push('Freakonomics');
console.log('Bestsellers: ', bestsellers.toString());
bestsellers[1] = 'The Lord of the Rings';
console.log('Bestsellers: ', bestsellers.toString());

///////////////////

// console.log(
//     'Are both costs same? (Equality Operator)',
//     costOfToothbrush == printedCost
//   );
//   console.log(
//     'Are both costs same? (Strict Equality Operator)',
//     costOfToothbrush === printedCost
//   );
//   console.log(
//     'The advertised cost is not the same as the actual cost: ',
//     advertisedCost !== costOfToothbrush
//   );

  ////////////
let waterTemperature = 100
var isItBoiling = waterTemperature >= 100;
var isItFrozen = waterTemperature <= 0;
var isItWarm = waterTemperature > 30 && waterTemperature < 60;
 
console.log('Is the water boiling?', isItBoiling);
console.log('Is the water frozen?', isItFrozen);
console.log('Is it warm?', isItWarm);

///* exception handling */

let costOfProduct = 100;
discount=100
try {
    if (costOfProduct <= discount)
        throw new Error('Cost of the product should be higher than the discount value');
    var totalCost = costOfProduct - discount;
    console.log('Total Cost: ${totalCost}');
} catch (error) {
    console.log('Oops! We have an error: ', error.message);
} finally {
    console.log('Thank you for using the app!');
}
////////////////

function printYourFavLanguage() {
    var favLanguage = 'javascript';
    console.log(`I love ${favLanguage} - coming from inside the function`);
}
printYourFavLanguage();
console.log(`I love ${favLanguage} - coming from outside the function`);