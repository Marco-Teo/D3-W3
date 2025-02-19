const pageForm = document.getElementById('task-list-form')
pageForm.addEventListener('submit', (e) => {
  e.preventDefault() 
    const taskInput = document.getElementById("task")
    const listContainer = document.getElementById("list-container")
    const taskList = document.createElement('li')
    taskList.innerHTML = `${taskInput.value} <button onclick="deleteTask(event)">Delete</button>`
    taskList.onclick = function(task){
        task.target.classList.toggle("completed")
    }
    listContainer.appendChild(taskList)
})
const deleteTask = function (e) {
    const pressedButton = e.target
    const cardToRemove = pressedButton.parentElement 
    cardToRemove.remove() 
  }