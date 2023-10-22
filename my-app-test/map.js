'use strict';

const citizens = [
  {
    id: 1,
    name: 'John Smith',
    age: 65,
  },
  {
    id: 2,
    name: 'Roger McShane',
    age: 68,
  },
  {
    id: 3,
    name: 'Dolly McShane',
    age: 55,
  },
  {
    id: 4,
    name: 'Joan Mockery',
    age: 61,
  },
];

const seniorCitizens = citizens.map(function (person) {
    person.isSeniorCitizen = person.age >= 60;
    return person;
});

console.log('--------------------');
console.log(citizens);  //why mutating original one
console.log(seniorCitizens)
//------------------
const numbers = [100, 200, 50, 250]
const newnum = numbers.map(n=>n*2)
console.log(newnum)
//------------------

let persons = [
    { "name":"A", "salary":1200 }, 
    { "name":"B", "salary": 1500 }
];

let persons1 = persons.map(item => {
  item.salary += 1000;
  return item;
});

console.log(persons1);