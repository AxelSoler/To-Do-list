import editTask from '../src/modules/editFunction.js';
import addToDo from '../src/modules/addFunction.js';

describe('Editing a task', () => {
  const tasks = [];
  const input8 = { value: 'Eighth test' };
  const task8 = addToDo(tasks, input8);
  const listItem8 = document.createElement('li');
  const descriptionTask8 = document.createElement('input');
  descriptionTask8.value = 'Changed description';
  const menu1 = document.createElement('div');
  const menu2 = document.createElement('div');

  listItem8.dataset.index = task8.index;
  descriptionTask8.value = input8.value;

  listItem8.appendChild(descriptionTask8);
  listItem8.appendChild(menu1);
  listItem8.appendChild(menu2);
  document.querySelector('body').appendChild(listItem8);

  editTask(descriptionTask8, listItem8, menu1, menu2, task8, tasks);

  describe('On blur', () => {
    descriptionTask8.dispatchEvent(new Event('blur'));

    test('Changed styles when blurred', () => {
      expect(listItem8.classList).toContain('editing');
      expect(menu1.classList).not.toContain('none');
      expect(menu2.classList).not.toContain('active');
    });

    test('Check description changes', () => {
      expect(task8.description).toBe(descriptionTask8.value);
    });

    test('Check localStorage', () => {
      expect(localStorage.setItem).toHaveBeenCalledWith('taskList', JSON.stringify(tasks));
    });
  });
});