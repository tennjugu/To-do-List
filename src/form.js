import { addTasktoTasks} from "./tasks"
import { taskLog } from "./taskLog"

function getFormTitle(){
    const titleLabel = document.createElement('label')
    titleLabel.for = 'title'
    titleLabel.textContent = 'Title:'
    return titleLabel
}

function getTitleInput(){
    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.id = 'title'
    titleInput.name = 'title'
    titleInput.required = true
    return titleInput
}

function getFormDescription(){
    const descriptionLabel = document.createElement('label')
    descriptionLabel.for = 'description'
    descriptionLabel.textContent = 'Description:'
    return descriptionLabel
}

function getDescriptionInput(){
    const descriptionTextarea = document.createElement('textarea')
    descriptionTextarea.id = 'description'
    descriptionTextarea.name = 'description'
    descriptionTextarea.rows = '4'
    descriptionTextarea.maxLength = '200'
    descriptionTextarea.required = true
    return descriptionTextarea
}

function getFormDueDate(){
    const dueDateLabel = document.createElement('label')
    dueDateLabel.for = 'dueDate'
    dueDateLabel.textContent = 'Due Date:'
    return dueDateLabel
}

function getDueDateInput(){
    const dueDateInput = document.createElement('input')
    dueDateInput.type = 'date'
    dueDateInput.id = 'dueDate'
    dueDateInput.name = 'dueDate'
    dueDateInput.required = true
    return dueDateInput
    }

function getFormTime(){
    const timeLabel = document.createElement('label')
    timeLabel.for = 'time'
    timeLabel.textContent = 'Time:'
    return timeLabel
    }

function getTimeInput(){
    const timeInput = document.createElement('input')
    timeInput.type = 'time'
    timeInput.id = 'time'
    timeInput.name = 'time'
    timeInput.required = true
    return timeInput
}

function getFormPriority(){
    const priorityLabel = document.createElement('label')
    priorityLabel.for = 'priority'
    priorityLabel.textContent = 'Priority:' 
    return priorityLabel
}

function getPriorityInput(){
    const prioritySelect = document.createElement('select')
    prioritySelect.id = 'priority'
    prioritySelect.name = 'priority'
    prioritySelect.required = true
    const optionOne = document.createElement('option')
    optionOne.value = 'high'
    optionOne.textContent = 'High'
    const optionTwo = document.createElement('option')
    optionTwo.value = 'medium'
    optionTwo.textContent = 'Medium'
    const optionThree = document.createElement('option')
    optionThree.value = 'low'
    optionThree.textContent = 'Low'
    const optionFour = document.createElement('option')
    optionFour.value = 'none'
    optionFour.textContent = 'none'
    optionFour.selected = 'true'
    prioritySelect.appendChild(optionOne)
    prioritySelect.appendChild(optionTwo)
    prioritySelect.appendChild(optionThree)
    prioritySelect.appendChild(optionFour)  
    return prioritySelect
}
    
function getFormInputs(){
    const submitButton = document.createElement('button')
    submitButton.id = 'formBtn'
    submitButton.type = 'submit'
    submitButton.textContent = 'Add Task'
    return submitButton
}

const newTodo = () =>{
    const todoFormContainer = document.querySelector('.main')
    const tableLog = document.querySelector('#taskTable')
    const form = document.createElement('form')
    form.id = 'taskForm'
   const titleLabel = getFormTitle()
   const titleInput = getTitleInput()
   const descriptionLabel = getFormDescription()
   const descriptionTextarea = getDescriptionInput()
   const dueDateLabel = getFormDueDate()
   const dueDateInput = getDueDateInput()
   const timeLabel = getFormTime()
   const timeInput = getTimeInput()
   const priorityLabel = getFormPriority()
   const selectOption = getPriorityInput()
   const formButton = getFormInputs()
    form.appendChild(titleLabel)
    form.appendChild(titleInput)
    form.appendChild(descriptionLabel)
    form.appendChild(descriptionTextarea)
    form.appendChild(dueDateLabel)
    form.appendChild(dueDateInput)
    form.appendChild(timeLabel)
    form.appendChild(timeInput)
    form.appendChild(priorityLabel)
    form.appendChild(selectOption)
    form.appendChild(formButton)
    todoFormContainer.appendChild(form)
form.addEventListener('submit', function(event){
    event.preventDefault()  
   addTasktoTasks()
   tableLog.style.display = 'block'
   form.reset()
   todoFormContainer.removeChild(form)
})
}

function addTask(){
    const mainSection = document.querySelector('.main')
    const tableLog = document.querySelector('#taskTable')
    const addBtn = document.querySelector('.addtask')
    addBtn.addEventListener('click',() => {
        if(mainSection.contains(tableLog)){
            tableLog.style.display = 'none'
            newTodo()
        }
    })
}


export {addTask}