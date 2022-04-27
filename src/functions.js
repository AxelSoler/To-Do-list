export default function addToDo(array, input) {
  let task = [
      {
        description: '',
        completed: Boolean,
        index: '',
      }
  ];
  task.description = input.value;
  task.completed = false;
  array.push(task);
  task.index = array.length;
  console.log(array);
  input.value = '';
  return task;
}