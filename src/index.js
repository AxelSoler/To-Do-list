import _ from 'lodash';
import './style.css';
const list = document.getElementById('list');

let tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: '1',
  },
  {
    description: 'complete to do list',
    completed: false,
    index: '2',
  },
  {
    description: 'make dinner',
    completed: false,
    index: '3',
  },
]

function createToDoList() {
  const title = document.createElement('h1');
  title.innerHTML= `To do List`;
  const ulList = document.createElement('ul');
  list.appendChild(title);
  for (let i = 0; i < tasks.length; i++) {
    const liTask =document.createElement('li');
    liTask.innerHTML =`${tasks[i].description}`;
    ulList.appendChild(liTask);
  }
  list.appendChild(ulList);
}

window.addEventListener('load', createToDoList());