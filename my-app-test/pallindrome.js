'use strict';

const words = ['Civic:', 'Seltos', 'Car', 'Noon', 'Refer', 'Tenet', 'Design'];

const isPalindrome = (str) => {
    const strAProc = str
      .toLowerCase()
      .replaceAll(/\s/g, '')
      .replaceAll(/[:;'"!@#$%^&*]/g, '');
   
    const strBProc = str
      .toLowerCase()
      .replaceAll(/\s/g, '')
      .replaceAll(/[:;'"!@#$%^&*]/g, '')
      .split('')
      .reverse()
      .join('');
   
    return strAProc === strBProc;
};

words.forEach((w) => {
  console.log(`${w} ${isPalindrome(w) ? 'is' : 'is not'} a palindrome`);
});
