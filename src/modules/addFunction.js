export default function addToDo(array, input) {
  let task = {
    description: input.value,
    completed: false,
    index: array.length +1,
  };
  array.push(task);
  input.value = '';
  localStorage.setItem('taskList', JSON.stringify(array));
  return task;
}