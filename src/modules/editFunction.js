export default function editTask(content, list, menu1, menu2, object, array) {
  content.onfocus = () => {
    list.classList.toggle('editing');
    menu1.classList.add('none');
    menu2.classList.add('active');
  };

  content.onblur = () => {
    list.classList.toggle('editing');
    object.description = content.value;
    localStorage.setItem('taskList', JSON.stringify(array));
    setTimeout(() => {
      menu1.classList.remove('none');
      menu2.classList.remove('active');
    }, 100);
  };
}