import { taskLog } from "./taskLog"

taskLog()

let allTasks = []
    retrieveLocalStore()
    todoItem()

function Task(title, description, dueDate, time, priority, status){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.time = time
    this.priority = priority
    this.status = status
}

function removeTask(position){
    allTasks.splice(position, 1)
    createLocalStore()
    todoItem()
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
        const todoDescription = document.createElement('td')
        todoDescription.classList.add('todo-Description')
        todoDescription.textContent = `${toDo.description}`
        const todoDueDate = document.createElement('td')
        todoDueDate.classList.add('todo-DueDate')
        todoDueDate.textContent = new Date(`${toDo.dueDate}`).toDateString()
        const todoTime = document.createElement('td')
        todoTime.classList.add('todo-Time')
        todoTime.textContent = `${toDo.time}`
        const todoPriority = document.createElement('td')
        todoPriority.classList.add('todo-Priority')
        todoPriority.textContent = `${toDo.priority}`
        const taskInput = [todoTitle, todoDescription, todoDueDate, todoTime, todoPriority]
        for(let i=0; i < taskInput.length; i++){
            todoDetails.appendChild(taskInput[i])
        }
        const todoStatus = document.createElement('td')
        todoStatus.classList.add('todo-Status')
        const checkboxElement = document.createElement('input')
        checkboxElement.type = 'checkbox'
        checkboxElement.id = 'completed'
        checkboxElement.checked = false
        checkboxElement.addEventListener("click", () =>{
            checkboxElement.checked = true
            setTimeout(() => {
                const confirmation = confirm('Task has been completed. Confirm to remove.')
                if (confirmation) {
                  removeTask(i)
                  setTimeout(() => {
                    alert('Task removed.');
                  }, 1)
                } else {
                  checkboxElement.checked = false
                }
            }, 3)
        })
        todoStatus.appendChild(checkboxElement)
        todoDetails.appendChild(todoStatus)
        tbody.appendChild(todoDetails)
    }
}

function addTasktoTasks() {
    let title = document.querySelector('#title').value
    let description = document.querySelector('#description').value
    let dueDate = document.querySelector('#dueDate').value
    let time = document.querySelector('#time').value
    let priority = document.querySelector('#priority').value
    let status = document.querySelector('input').checked
    let newTodoEntry = new Task(title, description, dueDate, time, priority, status)
    allTasks.push(newTodoEntry)
    createLocalStore()
    todoItem()
}

function sortDueDate() {
    allTasks.sort((a, b) => {
        const firstDate = a.dueDate
        const secondDate = b.dueDate
        if (firstDate < secondDate) {
            return -1;
        }
        if (firstDate > secondDate) {
            return 1;
        }
        if (firstDate === secondDate) {
            sortDueTime()
        }
    })
}

function sortDueTime(){
    allTasks.sort((a, b) => {
        const firstTime = a.time
        const secondTime = b.time

        if (firstTime < secondTime) {
            return -1
        }
        if (firstTime > secondTime) {
            return 1
        }
        if (firstTime === secondTime) {
            sortPriorityDescending()
        }
    })
}

function sortPriorityDescending(){
    const priorityValues = {
        none: 0,
        low: 1,
        medium: 2,
        high: 3,
    }
    allTasks.sort((a, b) => {
        const firstPriority = priorityValues[a.priority]
        const secondPriority = priorityValues[b.priority]
        if (firstPriority < secondPriority) {
            return 1
        }
        if (firstPriority > secondPriority) {
            return -1
        }
        return 0
    })
}

function createLocalStore() {
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
}

function retrieveLocalStore() {
    const storedTasks = JSON.parse(localStorage.getItem('allTasks')) || []
    allTasks = storedTasks
}

export {addTasktoTasks, retrieveLocalStore, todoItem, sortDueDate}