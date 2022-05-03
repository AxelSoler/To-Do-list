export default function checkStatus(box, description, object, array) {
  box.addEventListener('change', () => {
    if (box.checked) {
      description.classList.add('check');
      object.completed = true;
    } else {
      description.classList.remove('check');
      object.completed = false;
    }
    localStorage.setItem('taskList', JSON.stringify(array));
  });
}