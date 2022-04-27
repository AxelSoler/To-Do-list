import './style.css';
import addToDo from './modules/addFunction.js';

const tasks = [];

const display = (taskObj) => {
  const liTask = document.createElement('li');
  liTask.dataset.index = taskObj.index;
  const check = document.createElement('input');
  check.type = 'checkbox';
  const descriptionTask = document.createElement('span');
  descriptionTask.classList.add('description');
  descriptionTask.innerHTML = `${taskObj.description}`;
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

  divMenu.addEventListener('click', (e) => {
    divMenu.classList.add('none');
    divMenu2.classList.add('active');
  })

  divMenu2.addEventListener('click', (e) => {
    liTask.remove();
    // tasks.splice(e.target.liTask.dataset.index, 1)
    for (let i = 0; i < tasks.length; i += 1){
      tasks[i].index --;
    }
    console.log(tasks);
  })
}

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

addTask.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    display(addToDo(tasks, addTask));
  }
})

container.appendChild(ulList);
const clearBtn = document.createElement('button');
clearBtn.innerHTML = 'Clear all completed';
container.appendChild(clearBtn);