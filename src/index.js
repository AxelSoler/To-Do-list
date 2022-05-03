import './style.css';
import addToDo from './modules/addFunction.js';
import deleteTask from './modules/deleteFunction.js';
import editTask from './modules/editFunction.js';
import clearAllCheck from './modules/clearButton.js';
import checkStatus from './modules/checkStatus.js';

let tasks = [];

const list = document.getElementById('list');
const container = document.createElement('div');
container.classList.add('container');
const title = document.createElement('h2');
title.innerHTML = "Today's To Do";
const ulList = document.createElement('ul');
const addTaskDiv = document.createElement('div');
addTaskDiv.classList.add('addTaskDiv');
const addTask = document.createElement('input');
addTask.type = 'text';
addTask.classList.add('addTask');
addTask.placeholder = 'Add to your list ...';
const addBtn = document.createElement('button');
addBtn.classList.add('addBtn');
addBtn.innerText = '↵';
const clearBtn = document.createElement('button');
clearBtn.innerHTML = 'Clear all completed';
list.appendChild(container);
container.appendChild(title);
container.appendChild(addTaskDiv);
container.appendChild(ulList);
container.appendChild(clearBtn);
addTaskDiv.appendChild(addTask);
addTaskDiv.appendChild(addBtn);

const display = (taskObj) => {
  const liTask = document.createElement('li');
  liTask.classList.add('index');
  liTask.dataset.index = taskObj.index;
  const check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('checkbox');
  const descriptionTask = document.createElement('input');
  descriptionTask.classList.add('description');
  descriptionTask.value = `${taskObj.description}`;
  const divMenu = document.createElement('div');
  divMenu.classList.add('divMenu');
  const circle1 = document.createElement('circle');
  circle1.classList.add('menu');
  const circle2 = document.createElement('circle');
  circle2.classList.add('menu');
  const circle3 = document.createElement('circle');
  circle3.classList.add('menu');
  const divMenu2 = document.createElement('i');
  divMenu2.classList.add('deleteDiv');
  divMenu2.classList.add('fa-regular');
  divMenu2.classList.add('fa-trash-can');

  divMenu.appendChild(circle1);
  divMenu.appendChild(circle2);
  divMenu.appendChild(circle3);
  liTask.appendChild(check);
  liTask.appendChild(descriptionTask);
  liTask.appendChild(divMenu);
  liTask.appendChild(divMenu2);
  ulList.appendChild(liTask);

  divMenu.addEventListener('click', () => {
    divMenu.classList.add('none');
    divMenu2.classList.add('active');
  });

  editTask(descriptionTask, liTask, divMenu, divMenu2, taskObj, tasks);

  divMenu2.addEventListener('click', () => {
    deleteTask(liTask, tasks);
  });

  if (taskObj.completed === true) {
    descriptionTask.classList.add('check');
    check.checked = true;
  }

  checkStatus(check, descriptionTask, taskObj, tasks);
};
clearBtn.addEventListener('click', () => {
  const checkContainers = document.querySelectorAll('.index');
  clearAllCheck(tasks, checkContainers);
});

window.addEventListener('load', () => {
  tasks = JSON.parse(localStorage.getItem('taskList' || '[]'));
  if (tasks === null) {
    tasks = [];
    return;
  }
  tasks.forEach((task) => display(task));
});

addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    display(addToDo(tasks, addTask));
  }
});

addBtn.addEventListener('click', () => {
  if (addTask.value !== '') {
    display(addToDo(tasks, addTask));
  }
});