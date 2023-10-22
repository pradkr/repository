'use strict';

const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const displayWeapons = function (str) {
    const breakByLine = str.split('\n');
    for (const item of breakByLine) {
      let elements = item.split(',');
      console.log(`${elements[0]}. ${elements[1]} -- $${elements[2]}`);
    }
};

displayWeapons(weapons);
