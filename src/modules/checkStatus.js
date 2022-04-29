export default function checkStatus(box, desc, obj, array) {
  box.addEventListener('change', () => {
    if (box.checked) {
      desc.classList.add('check');
      obj.completed = true;
      localStorage.setItem('taskList', JSON.stringify(array));
    } else {
      desc.classList.remove('check');
      obj.completed = false;
      localStorage.setItem('taskList', JSON.stringify(array));
    }
  });
}