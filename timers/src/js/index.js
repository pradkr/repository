import { render, typeWriter } from './view'; 
import users from './data.json';

const userList = document.querySelector('#users');
const renderBtn = document.querySelector('#renderBtn');

renderBtn.addEventListener('click', function () { 
  render(users, userList, typeWriter, 20)(); 
}); 

render(users, userList, typeWriter, 20)(); 



