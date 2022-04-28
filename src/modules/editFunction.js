export default function editTask(desc, liElement, div1, div2, obj, array) {
  desc.onfocus = () => {
    liElement.classList.toggle('editing');
    div1.classList.add('none');
    div2.classList.add('active');
  }

  desc.onblur = () => {
    liElement.classList.toggle('editing');
    obj.description = desc.value;
    localStorage.setItem('taskList', JSON.stringify(array));
    setTimeout(() => {
      div1.classList.remove('none');
      div2.classList.remove('active');
    }, 10);
  }
}