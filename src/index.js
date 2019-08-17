// Get the PARENTS and set them as a variable
let form = document.getElementById("create-task-form")
let ulTag = document.getElementById('tasks')

const addTask = (event) => {
  let comments = document.createElement('li') // Create a new element of 'li'
  let deleteButton = document.createElement("button") // Create a new element of 'button'
  let boxText = form.elements[0].value // Like 'gets.chomp' this references the value where we are typing into
  comments.innerText = boxText //assigning the boxtext to 'li' as its child
  ulTag.appendChild(comments) // assiging the 'li' as its child
  deleteButton.innerText = 'delete' //Putting the text of 'x' inside the button
  comments.appendChild(deleteButton) // associate the delete button with the 'li'
  event.preventDefault() // stops page from reloading when we hit submit button 
  
  console.log(comments.innerText)
    const deleteTask = () => { //reads the function first, before it gets to the eventListener
      comments.remove() // deleting the 'li'
    }
    deleteButton.addEventListener("click", deleteTask)
}

form.addEventListener("submit", addTask)