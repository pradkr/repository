// const obj1 = {};
// Object.defineProperty(obj1, 'property1', {
//   value: 72,
//   writable: false
// });
// obj1.property1 = 44;
// console.log(obj1.property1);

// const deepCopy = function (obj) {
//     let tempObj = {};
//     for (let key in obj) {
//       tempObj = {
//         ...tempObj,
//         [key]:
//           typeof obj[key] === 'object' && !Array.isArray(obj[key])
//             ? { ...deepCopy(obj[key]) }
//             : typeof obj[key] === 'object' && !Array.isArray(obj[key])
//             ? [...obj[key]]
//             : obj[key],
//       };
//     }
   
//     return tempObj;
// };

// const book = {
//     isbn: '0-671-00410-7',
//     title: 'Contact',
//     author: 'Carl Sagan',
//     publisher: 'Pocket Books',
//     area() {
//         return this.width * this.height;
//       },
//     some() {console.log('getter')},
// };

// console.log(Object.keys(book))

//const repeatStr= (str, count) => Array.from( Array(count),elem=>str ).join('');
//console.log( repeatStr('Z',5) );
console.log("Z".repeat(5));

const steps = 6;
///leftt aligned
for (let x = 0; x < steps; x++) {
    console.log(`${'*'.repeat(steps - x)}`);
  }
  
for (let x = steps; x > 0; x--) {
    console.log(`${'*'.repeat(steps+1  - x)}`);
}

///right aligned
for (let x = 1; x <= steps; x++) {
    console.log(`${' '.repeat(x)}${'*'.repeat(steps + 1 - x)}`);
  }
 // You can see the use of the repeat() method, used to render multiple instances of the whitespace and the asterisk characters. Likewise, for the second half of the artwork, the following code does the job. 
for (let x = steps; x >= 1; x--) {
    console.log(`${' '.repeat(x)}${'*'.repeat(steps + 1 - x)}`);
}