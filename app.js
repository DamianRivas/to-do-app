function onReady() {

  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if(!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });

    renderTheUI();
  }

  function deleteToDo(id) {
    toDos = toDos.filter(todo => todo.id != id)
  }

  function renderTheUI() {

    toDoList.textContent = '';

    toDos.forEach(toDo => {
       const newToDo = document.createElement('li');
       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       const title = document.createElement('span');
       title.textContent = ' ' + toDo.title + ' ';
       const deleteButton = document.createElement('button');

       toDoList.appendChild(newToDo);
       newToDo.appendChild(checkbox);
       newToDo.appendChild(title);
       newToDo.appendChild(deleteButton);

       deleteButton.addEventListener('submit', event => {
        deleteToDo(toDo.id);
        renderTheUI();
       });

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();

}

window.onload = function() {
  onReady();
};