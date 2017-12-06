function onReady() {
  // INITIAL VARIABLES
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDoForm = document.getElementById('deleteToDoForm');

  // ADD TO THE TO-DO LIST
  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
  }

  // DELETE FROM THE TO-DO LIST
  function deleteToDos() {
    let listOfLists = document.getElementsByTagName('li');

    for (let i = 0; i < listOfLists.length; i++) {
      if (listOfLists[i].querySelector("input").checked) {
        toDos = toDos.filter(todo => !todo.complete);
      }
    }
  }


  // RENDER THE TO-DO LIST
  function renderTheUI() {

    id = 0;
    toDoList.textContent = '';

    toDos.forEach(toDo => {
      const newToDo = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const title = document.createElement('span');
      title.textContent = toDo.title

      toDoList.appendChild(newToDo);
      newToDo.appendChild(checkbox);
      newToDo.appendChild(title);

      if (toDo.complete === true) {
        checkbox.checked = true;
      }

      checkbox.addEventListener('change', event => {
        if (checkbox.checked) {
          toDo.complete = true;
        } else {
          toDo.complete = false;
        }
      });
      toDo.id = id++
    });

  }

  // CREATE A NEW TO-TO ON SUBMIT
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    renderTheUI();
    newToDoText.value = '';
  });

  // DELETE COMPLETED TODOS
  deleteToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    deleteToDos();
    renderTheUI();
  })

  renderTheUI();

}

window.onload = function () {
  onReady();
};