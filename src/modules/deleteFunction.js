export default function deleteTask(liElement, array) {
  const number = liElement.dataset.index;
  array.splice(number - 1, 1);
  for (let i = number - 1; i < array.length; i += 1) {
    array[i].index -= 1;
  }
  liElement.remove();
  const indElements = document.querySelectorAll('.index');
  indElements.forEach((element) => {
    if (element.dataset.index >= number) {
      element.dataset.index -= 1;
    }
  });
  localStorage.setItem('taskList', JSON.stringify(array));
}