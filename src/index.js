import './style.css';
import addToDo from './modules/addFunction.js';
import deleteTask from './modules/deleteFunction.js';
import editTask from './modules/editFunction.js';

let tasks = [];

const list = document.getElementById('list');
const container = document.createElement('div');
container.classList.add('container');
list.appendChild(container);
const title = document.createElement('h1');
title.innerHTML = "Today's To Do";
const ulList = document.createElement('ul');
container.appendChild(title);
const addTask = document.createElement('input');
addTask.type = 'text';
addTask.classList.add('addTask');
addTask.placeholder = 'Add to your list ...';
container.appendChild(addTask);
container.appendChild(ulList);
const clearBtn = document.createElement('button');
clearBtn.innerHTML = 'Clear all completed';
container.appendChild(clearBtn);

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
  const span1 = document.createElement('circle');
  span1.classList.add('menu');
  const span2 = document.createElement('circle');
  span2.classList.add('menu');
  const span3 = document.createElement('circle');
  span3.classList.add('menu');
  const divMenu2 = document.createElement('i');
  divMenu2.classList.add('deleteDiv');
  divMenu2.classList.add('fa-regular');
  divMenu2.classList.add('fa-trash-can');

  divMenu.appendChild(span1);
  divMenu.appendChild(span2);
  divMenu.appendChild(span3);
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

  if(taskObj.completed === true) {
    descriptionTask.classList.add('check')
    check.checked = true;
  }

  check.addEventListener('click', () => {
    if (check.checked) {
      descriptionTask.classList.add('check')
      taskObj.completed = true;
      localStorage.setItem('taskList', JSON.stringify(tasks));
    }else {
      descriptionTask.classList.remove('check')
      taskObj.completed = false;
      localStorage.setItem('taskList', JSON.stringify(tasks));
    }
  })

};

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