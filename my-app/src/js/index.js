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



