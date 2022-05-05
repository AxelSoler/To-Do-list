import checkStatus from '../src/modules/checkStatus.js';
import addToDo from '../src/modules/addFunction.js';
import clearAllCheck from '../src/modules/clearButton.js';

describe('checking task completed', () => {
  const tasks = [];
  const input4 = { value: 'Fourth test' };
  const task4 = addToDo(tasks, input4);
  const taskContainer4 = document.createElement('ul');
  const listItem4 = document.createElement('li');
  listItem4.dataset.index = task4.index;
  document.querySelector('body').appendChild(taskContainer4);
  const check4 = document.createElement('input');
  check4.type = 'checkbox';
  const descriptionTask4 = document.createElement('input');
  descriptionTask4.value = input4.value;
  listItem4.appendChild(check4);
  listItem4.appendChild(descriptionTask4);
  taskContainer4.appendChild(listItem4);

  checkStatus(check4, descriptionTask4, task4, tasks);
  check4.dispatchEvent(new Event('change'));
  tasks[0].completed = false;

  describe('unchecked', () => {
    describe('checkbox is not checked', () => {
      test('', () => {
        expect(taskContainer4.classList).not.toContain('check');
        expect(task4.completed).toBe(false);
      });
      test('Check localStorage', () => {
        expect(localStorage.setItem).toHaveBeenCalledWith('taskList', JSON.stringify(tasks));
      });
    });
  });
  describe('checked', () => {
    const tasks = [];
    const input5 = { value: 'Fourth test' };
    const task5 = addToDo(tasks, input5);
    const taskContainer5 = document.createElement('ul');
    const listItem5 = document.createElement('li');
    listItem5.dataset.index = task5.index;
    document.querySelector('body').appendChild(taskContainer5);
    const check5 = document.createElement('input');
    check5.type = 'checkbox';
    check5.checked = true;
    const descriptionTask5 = document.createElement('input');
    descriptionTask5.value = input5.value;
    listItem5.appendChild(check5);
    listItem5.appendChild(descriptionTask5);
    taskContainer5.appendChild(listItem5);

    checkStatus(check5, listItem5, task5, tasks);
    check5.dispatchEvent(new Event('change'));
    tasks[0].completed = true;

    describe('', () => {
      test('checkbox is checked', () => {
        expect(listItem5.classList).toContain('check');
        expect(task5.completed).toBe(true);
      });

      test('Check localStorage', () => {
        expect(localStorage.setItem).toHaveBeenCalledWith('taskList', JSON.stringify(tasks));
      });
    });
  });
});

describe('checked', () => {
  const tasks = [];
  const input6 = { value: 'Sixth test' };
  const task6 = addToDo(tasks, input6);
  const listItem6 = document.createElement('li');
  listItem6.dataset.index = task6.index;
  const check6 = document.createElement('input');
  check6.type = 'checkbox';
  check6.checked = true;
  listItem6.appendChild(check6);
  const descriptionTask6 = document.createElement('input');
  descriptionTask6.value = input6.value;
  listItem6.appendChild(descriptionTask6);

  const input7 = { value: 'Seventh test' };
  const task7 = addToDo(tasks, input7);
  const listItem7 = document.createElement('li');
  listItem7.dataset.index = task7.index;
  const check7 = document.createElement('input');
  check7.type = 'checkbox';
  check7.checked = false;
  listItem7.appendChild(check7);
  const descriptionTask7 = document.createElement('input');
  descriptionTask7.value = input7.value;
  listItem7.appendChild(descriptionTask7);

  const taskContainer5 = document.createElement('ul');
  document.querySelector('body').appendChild(taskContainer5);

  taskContainer5.appendChild(listItem6);
  taskContainer5.appendChild(listItem7);

  describe('clear all completed', () => {
    checkStatus(check6, listItem6, task6, tasks);
    check6.dispatchEvent(new Event('change'));
    tasks[0].completed = true;

    checkStatus(check7, listItem7, task7, tasks);
    check7.dispatchEvent(new Event('change'));
    tasks[1].completed = false;

    clearAllCheck(tasks, taskContainer5.childNodes);
    test('task removed', () => {
      expect(tasks.length).toBe(1);
    });

    test('Check localStorage', () => {
      expect(localStorage.setItem).toHaveBeenCalledWith('taskList', JSON.stringify(tasks));
    });
  });
});