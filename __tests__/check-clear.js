import checkStatus from '../src/modules/checkStatus.js';
import addToDo from '../src/modules/addFunction.js';

describe('checking task completed', () => {
  let tasks2 = [];
  const input4 = { value: 'Fourth test' };
  const task4 = addToDo(tasks2, input4);
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

  checkStatus(check4, descriptionTask4, task4, tasks2);
  describe('unchecked', () => {
    describe('checkbox is not checked', () => {
      test('', () => {
        expect(taskContainer4.classList).not.toContain('check');
        expect(task4.completed).toBe(false);
      })
      test('Check localStorage', () => {
        expect(localStorage.setItem).toHaveBeenLastCalledWith('taskList', JSON.stringify(tasks2));
        expect(localStorage.__STORE__.taskList).toBe(JSON.stringify(tasks2));
      });
    })
  });
  
  // describe('checked', () => {
  //   let tasks3 = [];
  //   const input5 = { value: 'Fourth test' };
  //   const task5 = addToDo(tasks3, input5);
  //   const taskContainer5 = document.createElement('ul');
  //   const listItem5 = document.createElement('li');
  //   listItem5.dataset.index = task5.index;
  //   document.querySelector('body').appendChild(taskContainer5);
  //   const check5 = document.createElement('input');
  //   check5.type = 'checkbox';
  //   check5.checked = true;
  //   const descriptionTask5 = document.createElement('input');
  //   descriptionTask5.value = input5.value;
  //   listItem5.appendChild(check5);
  //   listItem5.appendChild(descriptionTask5);
  //   taskContainer5.appendChild(listItem5);
    
  //   checkStatus(check5, listItem5, task5, tasks3);
  //   describe('', () => {
  //     test('checkbox is checked', () => {
  //       // expect(listItem5.classList.contains('check')).toBe(true);
  //       expect(listItem5.classList).toContain('check');
  //       expect(task5.completed).toBe(true);
  //     })
    
  //     test('Check localStorage', () => {
  //       expect(localStorage.setItem).toHaveBeenLastCalledWith('taskList', JSON.stringify(tasks3));
  //       expect(localStorage.__STORE__.taskList).toBe(JSON.stringify(tasks3));
  //     });
  //   })
  // });
});