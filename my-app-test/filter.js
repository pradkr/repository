'use strict';

const users = [
    {
        name: 'John M',
        isVerified: true,
    },
    {
        name: 'Jane S',
        isVerified: false,
    },
    {
        name: 'Wanda M',
        isVerified: true,
    },
    {
        name: 'Tony S',
        isVerified: false,
    },
    {
        name: 'Emilio Q',
        isVerified: true,
    },
    {
        name: 'Jonathan W',
        isVerified: false,
    },
];

const isVerified = users.filter(({ isVerified }) => isVerified).map(({ name }) => name);
const notVerified = users.filter(({ isVerified }) => !isVerified).map(({ name }) => name);

console.log(`Verified: ${isVerified}`);
console.log(`Not Verified: ${notVerified}`);
