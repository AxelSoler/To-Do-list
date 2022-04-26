import './style.css';

const tasks = [
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
];

const list = document.getElementById('list');

function createToDoList() {
  const container = document.createElement('div');
  container.classList.add('container');
  list.appendChild(container);
  const title = document.createElement('h1');
  title.innerHTML = "Today's To Do";
  const ulList = document.createElement('ul');
  container.appendChild(title);
  const addTask = document.createElement('input');
  addTask.classList.add('addTask');
  addTask.placeholder = 'Add to your list ...';
  container.appendChild(addTask);

  for (let i = 0; i < tasks.length; i += 1) {
    const liTask = document.createElement('li');
    const label = document.createElement('label');
    const check = document.createElement('input');
    check.type = 'checkbox';
    const descriptionTask = document.createElement('span');
    descriptionTask.classList.add('description');
    descriptionTask.innerHTML = `${tasks[i].description}`;
    const divMenu = document.createElement('div');
    divMenu.classList.add('divMenu');
    const span1 = document.createElement('circle');
    span1.classList.add('menu');
    const span2 = document.createElement('circle');
    span2.classList.add('menu');
    const span3 = document.createElement('circle');
    span3.classList.add('menu');

    divMenu.appendChild(span1);
    divMenu.appendChild(span2);
    divMenu.appendChild(span3);
    label.appendChild(check);
    label.appendChild(descriptionTask);
    label.appendChild(divMenu)
    liTask.appendChild(label);
    ulList.appendChild(liTask);
  }

  container.appendChild(ulList);
  const clearBtn = document.createElement('button');
  clearBtn.innerHTML = 'Clear all completed';
  container.appendChild(clearBtn);
}

window.addEventListener('load', createToDoList());