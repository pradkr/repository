'use strict';
const productA = {
  category: 'Air Conditioners',
  brand: 'Samsung',
  model: 'XTR-15-5S',
  type: 'Split',
  cost: 1200,
  wiFiEnabled: false,
  details: {
    compressor: 'Tecumseh',
    capacity: 1.5,
    powerConsumption: 1200,
    type: 'Rotary',
  },
};

// Write your code below this line
const deepCopy = function (obj) {
    let tempObj = {};
    for (let key in obj) {
      tempObj = {
        ...tempObj,
        [key]:
          typeof obj[key] === 'object' && !Array.isArray(obj[key])
            ? { ...deepCopy(obj[key]) }
            : typeof obj[key] === 'object' && !Array.isArray(obj[key])
            ? [...obj[key]]
            : obj[key],
      };
    }
   
    return tempObj;
};
// Write your code above this line

//let productB = productA;
let productB = deepCopy(productA);

productB.model = 'XJR-20W';
productB.type = 'Window';
productB.cost = 800;
productB.details.compressor = 'Samsung';

console.log(`Product A | Model: ${productA.model}`);
console.log(`Product A | Type: ${productA.type}`);
console.log(`Product A | Cost: ${productA.cost}`);
console.log(`Product A | Compressor: ${productA.details.compressor}`);

console.log(`Product B | Model: ${productB.model}`);
console.log(`Product B | Type: ${productB.type}`);
console.log(`Product B | Cost: ${productB.cost}`);
console.log(`Product B | Compressor: ${productB.details.compressor}`);

console.log(
  `CONCLUSION: ${
    Object.is(productA, productB)
      ? 'Both objects are still the same. productB has mutated productA'
      : 'productB is now a deep clone of productA'
  }`
);
