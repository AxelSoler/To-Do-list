export default function addToDo(array, input) {
  let task = [
      {
        description: '',
        completed: false,
        index: '4',
      }
  ];
  task.description = input.value;
  array.push(task);
  console.log(array);
  input.value = '';
  return task;
}