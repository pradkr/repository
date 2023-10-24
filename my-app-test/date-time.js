'use strict';

const waltDisneyBirthday = new Date('5 December, 1901 00:35:00');

const yearsTo = (date) => {
    const diff = (date - Date.now()) / 31536000000;
    return Math.abs(diff.toPrecision(4));
};

//console.log(waltDisneyBirthday)
console.log(
    `Walt Disney was born on ${waltDisneyBirthday.toLocaleString(
      'en-IN'
    )}. That was ${yearsTo(waltDisneyBirthday)} years ago!`
);

const k = new Date(1993, 6, 28, 14, 39, 7); 
console.log(k.toDateString());
console.log(k.toISOString());

///////////////////
'use strict';

const date = new Date(2020, 2, 20);
date.setHours(15);
date.setMinutes(35);
date.setSeconds(23);
date.setMilliseconds(12);

const getDate = date.getDate();
const getDay = date.getDay();
const getMonth = date.getMonth();
const getFullYear = date.getFullYear();

const getHours = date.getHours();
const getMinutes = date.getMinutes();
const getSeconds = date.getSeconds();
const getMilliseconds = date.getMilliseconds();
const getTime = date.getTime();

console.log(`Date: ${date}`);
console.log(`The date: ${getDate}`);
console.log(`The day: ${getDay}`);
console.log(`The Month: ${getMonth}`);
console.log(`The year: ${getFullYear}`);
console.log(`Time: ${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`);
console.log(`Time (ms since Epoch): ${getTime}`);
