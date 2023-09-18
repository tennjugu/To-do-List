import { addTasktoTasks} from "./tasks"

const newTodo = () =>{
    const todoFormContainer = document.querySelector('.main')
    
    const form = document.createElement('form')
    form.id = 'taskForm'

    const titleLabel = document.createElement('label')
    titleLabel.for = 'title'
    titleLabel.textContent = 'Title:'
    form.appendChild(titleLabel)

    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.id = 'title'
    titleInput.name = 'title'
    titleInput.required = true
    form.appendChild(titleInput)


    const descriptionLabel = document.createElement('label')
    descriptionLabel.for = 'description'
    descriptionLabel.textContent = 'Description:'
    form.appendChild(descriptionLabel)

    const descriptionTextarea = document.createElement('textarea')
    descriptionTextarea.id = 'description'
    descriptionTextarea.name = 'description'
    descriptionTextarea.rows = '4'
    descriptionTextarea.maxLength = '200'
    descriptionTextarea.required = true
    form.appendChild(descriptionTextarea)

  
    const dueDateLabel = document.createElement('label')
    dueDateLabel.for = 'dueDate'
    dueDateLabel.textContent = 'Due Date:'
    form.appendChild(dueDateLabel)

    const dueDateInput = document.createElement('input')
    dueDateInput.type = 'date'
    dueDateInput.id = 'dueDate'
    dueDateInput.name = 'dueDate'
    dueDateInput.required = true
    form.appendChild(dueDateInput)


    const timeLabel = document.createElement('label')
    timeLabel.for = 'time'
    timeLabel.textContent = 'Time:'
    form.appendChild(timeLabel)

    const timeInput = document.createElement('input')
    timeInput.type = 'time'
    timeInput.id = 'time'
    timeInput.name = 'time'
    timeInput.required = true
    form.appendChild(timeInput)


    const priorityLabel = document.createElement('label')
    priorityLabel.for = 'priority'
    priorityLabel.textContent = 'Priority:'
    form.appendChild(priorityLabel)

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
    
    form.appendChild(prioritySelect)


    const submitButton = document.createElement('button')
    submitButton.id = 'formBtn'
    submitButton.type = 'submit'
    submitButton.textContent = 'Add Task'
    form.appendChild(submitButton)
    
    todoFormContainer.appendChild(form)
    
    form.addEventListener('submit', function(event){
        event.preventDefault()  
       addTasktoTasks()
        // form.reset()
        // form.style.display = 'none'
    })
}

function addTask(){
    const addBtn = document.querySelector('.addtask')
    addBtn.addEventListener('click',() => {
        newTodo()
    })
}

// function addTask(){
//     const main = document.querySelector('.main')
//     const form = document.querySelector('#taskForm')

//     const addBtn = document.querySelector('.addtask')
//     addBtn.addEventListener('click',() => {
//         if(main.contains(form)){
//             main.removeChild(form)
//         }
//         else{
//             newTodo()
//         }
        
//     })
// }

export {addTask}