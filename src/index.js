let content = document.getElementById("new-task-description");
let text = document.getElementById("due-date")
let form = document.getElementById("create-task-form");
let list = document.getElementById("tasks")
let items = [];
let redArray = [];
let yellowArray = [];
let greenArray = [];


const addColors = () =>{
  let selectlist = document.createElement("select")
  selectlist.id = "selectlist"
  form.appendChild(selectlist)

  let red = document.createElement("option")
  red.value = "red"
  red.innerText = "red"
  let yellow = document.createElement("option")
  yellow.value = "yellow"
  yellow.innerText = "yellow"
  let green = document.createElement("option")
  green.value = "green"
  green.innerText = "green"

  selectlist.appendChild(red)
  selectlist.appendChild(yellow)
  selectlist.appendChild(green)
}

const addInput = () => {
  let text = document.createElement("input")
  text.setAttribute("type", "text")
  text.setAttribute("placeholder", "Due Date")
  text.id = "due-date"
  form.appendChild(text)
}

const addTask = () =>{
  event.preventDefault()
  text = document.getElementById("due-date")
  let newTask = document.createElement("li");
  newTask.innerText = `${content.value} due on ${text.value}`;
  newTask.style.color = document.getElementById("selectlist").value;
  newTask.setAttribute("class", document.getElementById("selectlist").value)
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", ()=> newTask.remove())
  newTask.appendChild(deleteButton)
  content.value = ""
  text.value = ""


  items.push(newTask);


  items.forEach(item => { 
    let color = item.classList[0]
    if (color == "green"){
      greenArray.push(item)
    } else if (color == "red"){
      redArray.push(item);
    } else if (color == "yellow"){
      yellowArray.push(item)
    }
  });

  let sortedArray = redArray.concat(yellowArray).concat(greenArray);
  sortedArray.forEach(node => {
    list.appendChild(node);
  })
}

addColors()
addInput()

form.addEventListener("submit", addTask)