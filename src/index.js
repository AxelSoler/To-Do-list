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
  const container = document.createElement('div');
  container.classList.add('container')
  list.appendChild(container);
  const title = document.createElement('h1');
  title.innerHTML= `Today's To Do`;
  const ulList = document.createElement('ul');
  container.appendChild(title);
  const addTask = document.createElement('input');
  addTask.placeholder = 'Add to your list ...';
  container.appendChild(addTask);
  for (let i = 0; i < tasks.length; i++) {
    const liTask =document.createElement('li');
    liTask.innerHTML =`${tasks[i].description}`;
    ulList.appendChild(liTask);
  }
  container.appendChild(ulList);
  const clearBtn = document.createElement('button');
  clearBtn.innerHTML =`Clear all completed`;
  container.appendChild(clearBtn);
}

window.addEventListener('load', createToDoList());