export default function deleteTask(list, array) {
  const number = list.dataset.index;
  array.splice(number - 1, 1);
  for (let i = number - 1; i < array.length; i += 1) {
    array[i].index -= 1;
  }
  list.remove();
  const indexElements = document.querySelectorAll('.index');
  indexElements.forEach((element) => {
    if (element.dataset.index >= number) {
      element.dataset.index -= 1;
    }
  });
  localStorage.setItem('taskList', JSON.stringify(array));
}