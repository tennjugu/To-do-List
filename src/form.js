import { addTasktoTasks} from "./tasks"

function getCancelBtn(){
    const cancel = document.createElement('span')
    cancel.id = 'cancel'
    cancel.innerText = '✖'
    return cancel
}

function getFormTitle() {
    const titleLabel = document.createElement('label')
    titleLabel.htmlFor = 'title'
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

function getFormDescription() {
    const descriptionLabel = document.createElement('label')
    descriptionLabel.htmlFor = 'description'
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

function getFormDueDate() {
    const dueDateLabel = document.createElement('label')
    dueDateLabel.htmlFor = 'dueDate'
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

function getFormTime() {
    const timeLabel = document.createElement('label')
    timeLabel.htmlFor = 'time'
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

function getFormPriority() {
    const priorityLabel = document.createElement('label')
    priorityLabel.htmlFor = 'priority'
    priorityLabel.textContent = 'Priority:'
    return priorityLabel
}

function getPriorityInput(){
    const prioritySelect = document.createElement('select')
    prioritySelect.id = 'priority'
    prioritySelect.name = 'priority'
    prioritySelect.required = true
    // const optionOne = document.createElement('option')
    const options = ['High', 'Medium', 'Low', 'None']
    for (let i=0; i < options.length; i++ ){
        let selection = document.createElement('option')
        selection.value = options[i].toLocaleLowerCase()
        selection.textContent = options[i]
        selection.selected = options[3]
        prioritySelect.appendChild(selection)
    }
    return prioritySelect
}
    
function getFormInputs(){
    const submitButton = document.createElement('button')
    submitButton.id = 'formBtn'
    submitButton.type = 'submit'
    submitButton.textContent = 'Add'
    return submitButton
}

const newTodo = () =>{
    const todoFormContainer = document.querySelector('.sidebar')
    const form = document.createElement('form')
    form.id = 'taskForm'
    const cancelBtn = getCancelBtn()
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
    const tableData = [cancelBtn, titleLabel, titleInput, descriptionLabel, descriptionTextarea, dueDateLabel, 
        dueDateInput, timeLabel, timeInput, priorityLabel, selectOption, formButton]
    for (let i=0; i < tableData.length; i++){
        form.appendChild(tableData[i])
    }
    todoFormContainer.appendChild(form)
    form.addEventListener('submit', function(event){
        event.preventDefault()  
        addTasktoTasks()
        form.reset()
    })
    cancelBtn.addEventListener('click', () =>{
        todoFormContainer.removeChild(form)
        form.reset()
    })
}

function addTaskTab(){
    const addBtn = document.querySelector('.addtask')
    addBtn.addEventListener('click',() => {
        const sideBar = document.querySelector('.sidebar')
        const hasForm = document.getElementById('taskForm')
        if(sideBar.contains(hasForm)){
            hasForm.reset()
        }
         else{
            newTodo()
         }
    })
}

export {addTaskTab}