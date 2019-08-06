let form = document.getElementById("create-task-form")
let ulTag = document.getElementById('tasks')
let counter = 0

const addTask = (event) => {
  // stops page from reloading when we hit submit button 
  let comments = document.createElement('li')
  let deleteButton = document.createElement("button")
  let boxText = form.elements[0].value
  comments.innerText = boxText
  ulTag.appendChild(comments)
  // deleteButton.setAttribute("onClick", 'deleteTask("'+'btn'+counter+'")')
  deleteButton.innerText = 'X'
  comments.appendChild(deleteButton)
  event.preventDefault()
  console.log(comments.innerText)
  counter += 1
  // deleteButton.addEventListener("click", function(){
  //   console.log("delete");
  //   comments.remove()
  // })
  const deleteTask = () => {
    console.log("delete");
    comments.remove()
  }
  deleteButton.addEventListener("click", deleteTask)
}

form.addEventListener("submit", addTask)