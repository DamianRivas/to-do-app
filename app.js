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
    debugger
    // Get the li's that are checked
    let listOfInputs = document.getElementsByTagName("input");

    // Remove checked li's from the page
    for(var inpt in listOfInputs) {
      if(inpt.checked) {
        inpt.parentNode.remove();
      }
    }

  });

}

window.onload = function() {
  onReady();
};