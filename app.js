function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // Get the text
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // Create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;
    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
  });

  deleteToDo.addEventListener('submit', event => {
    event.preventDefault();

    // Get the li's that are checked

    // Remove checked li's from the page

  });

}

window.onload = function() {
  onReady();
};