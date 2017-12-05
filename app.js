function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);
    newToDoText.value = '';
  });

  deleteToDo.addEventListener('submit', event => {
    event.preventDefault();

    // Get the li's that are checked
    let toDoChecker = document.getElementById('toDoList').getElementsByTagName("input");
    let checkedToDos = [];

    for(let i = 0; i < toDoChecker.length; i++) {
      if(toDoChecker[i].checked) {
        checkedToDos.push(toDoChecker[i].parentNode);
      }
    }

    // Remove checked li's from the page
    for(let todo = 0; todo < checkedToDos.length; todo++) {
      checkedToDos[todo].parentNode.removeChild(checkedToDos[todo]);
    }

  });

}

window.onload = function() {
  onReady();
};