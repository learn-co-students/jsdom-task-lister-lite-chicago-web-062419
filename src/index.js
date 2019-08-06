
let taskForm = document.getElementById("create-task-form")
const taskUl = document.getElementById('tasks')

document.addEventListener("DOMContentLoaded", (event) => {
  taskForm.addEventListener("submit", addItem);
});

function addItem() {
  event.preventDefault(); //
  let userInput = document.getElementById("new-task-description").value
  if (userInput != '') {
  
    const taskItem = document.createElement('li')
    // add li to ul 'tasks'. appendChild to ul
    taskItem.textContent = userInput
    taskUl.appendChild(taskItem);
  
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    taskItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', deleteItem)
    document.getElementById("new-task-description").value = ''
  }
};

function deleteItem() {
  event.target.parentNode.remove();
  //'click'.the object being clicked.<li>.remove
}

