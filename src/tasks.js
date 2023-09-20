import { taskLog } from "./taskLog"
// import { parseISO, compareAsc, format } from "date-fns"

taskLog()

let allTasks = []
 retrieveLocalStore()
 todoItem()

 function Task(title, description, dueDate, time, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.time = time
    this.priority = priority
}



 function todoItem(){
    
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ''

    for (let i = 0; i < allTasks.length; i++){
        const toDo = allTasks[i]

        const todoDetails = document.createElement('tr')
        todoDetails.classList.add('todo-details')
        

        const todoTitle = document.createElement('td')
        todoTitle.classList.add('todo-title')
        todoTitle.textContent = `${toDo.title}`
        todoDetails.appendChild(todoTitle)

        const todoDescription = document.createElement('td')
        todoDescription.classList.add('todo-Description')
        todoDescription.textContent = `${toDo.description}`
        todoDetails.appendChild(todoDescription)

        let todoDueDate = document.createElement('td')
        todoDueDate.classList.add('todo-DueDate')
        todoDueDate.textContent = `${toDo.dueDate}`
        todoDetails.appendChild(todoDueDate)

        const todoTime = document.createElement('td')
        todoTime.classList.add('todo-Time')
        todoTime.textContent = `${toDo.time}`
        todoDetails.appendChild(todoTime)


        const todoPriority = document.createElement('td')
        todoPriority.classList.add('todo-Priority')
        todoPriority.textContent = `${toDo.priority}`

        todoDetails.appendChild(todoPriority)


        tbody.appendChild(todoDetails)
    }
}


 function addTasktoTasks() {
    let title = document.querySelector('#title').value
    let description = document.querySelector('#description').value
    let dueDate = document.querySelector('#dueDate').value
    let time = document.querySelector('#time').value
    let priority = document.querySelector('#priority').value

    let newTodoEntry = new Task(title, description, dueDate, time, priority)
    allTasks.push(newTodoEntry)
    createLocalStore()
    todoItem()
}




function createLocalStore() {
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
}

function retrieveLocalStore() {
    const storedTasks = JSON.parse(localStorage.getItem('allTasks')) || []
    allTasks = storedTasks
}


export {addTasktoTasks, retrieveLocalStore, todoItem}