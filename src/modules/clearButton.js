import deleteTask from "./deleteFunction.js";

export default function clearAllCheck(array, containers) {
  containers.forEach((container) => {
    if(container.children[0].checked) {
      deleteTask(container, array);
    }
  });
}