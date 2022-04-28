export default function deleteTask(liElement, array) {
  const number = liElement.dataset.index;
  console.log(number)
  array.splice(number - 1, 1);
  for (let i = number - 1; i < array.length; i += 1){
    array[i].index --;
  }
  liElement.remove();
  let indElements = document.querySelectorAll('.index');
  indElements.forEach((element) => {
    if (element.dataset.index >= number) {
      element.dataset.index --;
    }
})

  console.log(array);
}