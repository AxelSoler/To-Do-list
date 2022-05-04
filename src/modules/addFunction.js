export default function addToDo(array, input) {
  const task = {
    completed: false,
    description: input.value,
    index: array.length + 1,
  };
  array.push(task);
  input.value = '';
  localStorage.setItem('taskList', JSON.stringify(array));
  return task;
}