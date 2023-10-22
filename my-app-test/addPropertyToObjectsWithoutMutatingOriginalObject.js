'use strict';

const userDb = [
  {
    id: 1,
    name: 'Dmitri Mishkov',
    email: 'dmitri.m@sprintserve.co',
    password: 'tempPass',
  },
  {
    id: 2,
    name: 'Jimmy McIntyre',
    email: 'jimmymc@whatmail.com',
    password: 'tempPass',
  },
  {
    id: 3,
    name: 'David Adams',
    email: 'adams@whatmail.com',
    password: 'tempPass',
  },
];

const userPriveleges = {
  profile: true,
  admin: false,
  billing: true,
};

const genPassword = (name) =>
  name.replace(/\s/, '-').toLowerCase().split('').reverse().join('');

// Write your code here...
const configureUsers = userDb.map((user) => ({
    ...user,
    password: genPassword(user.name),
    ...userPriveleges,
  }));
   
  console.log(configureUsers);