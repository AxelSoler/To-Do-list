import addToDo from '../src/modules/addFunction.js';
import deleteTask from '../src/modules/deleteFunction.js';

const tasks = [];

describe('Add item tests', () => {
  describe('Add to empty list', () => {
    const input1 = { value: 'Some text' };
    const task1 = addToDo(tasks, input1);

    test('Add item', () => {
      expect(task1.description).toBe('Some text');
      expect(task1.completed).toBe(false);
      expect(task1.index).toBe(1);
      expect(tasks.length).toBe(2);
    });

    test('Check localStorage', () => {
      expect(localStorage.setItem).toHaveBeenLastCalledWith('taskList', JSON.stringify(tasks));
      expect(localStorage.__STORE__.taskList).toBe(JSON.stringify(tasks));
    });
  });

  describe('Add to non-empty list', () => {
    const input2 = { value: 'Second test' };
    const task2 = addToDo(tasks, input2);

    test('Add nth item', () => {
      expect(task2.description).toBe('Second test');
      expect(task2.completed).toBe(false);
      expect(task2.index).toBe(2);
      expect(tasks.length).toBe(2);
    });

    test('Check localStorage', () => {
      expect(localStorage.setItem).toHaveBeenLastCalledWith('taskList', JSON.stringify(tasks));
      expect(localStorage.__STORE__.taskList).toBe(JSON.stringify(tasks));
    });
  });
});

describe('remove task from the list', () => {
  const input3 = { value: 'Third test' };
  const task3 = addToDo(tasks, input3);
  const taskContainer = document.createElement('ul');
  const listItem = document.createElement('li');
  listItem.dataset.index = task3.index;
  taskContainer.appendChild(listItem);
  document.querySelector('body').appendChild(taskContainer);

  deleteTask(listItem, tasks);
  const indices = tasks.filter((item) => item.index);

  test('remove task', () => {
    expect(taskContainer.childNodes).toHaveLength(0);
    expect(tasks.length).toBe(2);
    expect(indices).toStrictEqual(tasks);
  });

  test('Check localStorage', () => {
    expect(localStorage.setItem).toHaveBeenLastCalledWith('taskList', JSON.stringify(tasks));
    expect(localStorage.__STORE__.taskList).toBe(JSON.stringify(tasks));
  });
});