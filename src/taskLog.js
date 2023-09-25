// table for storing inputs
  import { sortDueDate, todoItem, retrieveLocalStore } from "./tasks";

const taskLog = () =>{
    let table = document.createElement('table')
    table.id = 'taskTable'
    let thead = document.createElement('thead')
    let headerRow = document.createElement('tr')
    let tableHeaders = ['Title', 'Description', 'Due Date', 'Time', 'Priority', 'Status']
    for (let i=0; i < tableHeaders.length; i++){
        let headings = document.createElement('th')
        headings.textContent = tableHeaders[i]
        headerRow.appendChild(headings)
        if (tableHeaders[i] === 'Due Date') {
            headings.id = 'dueDateHeader'
        }
        if (tableHeaders[i] === 'Priority') {
            headings.id = 'priorityHeader'
        }
    }
    thead.appendChild(headerRow)
    let tbody = document.createElement('tbody')
    table.appendChild(thead)
    table.appendChild(tbody)
    let main = document.querySelector('.main')
    main.appendChild(table)

    let sorting = false;
    const dueDateHeader = document.querySelector('#dueDateHeader')
    dueDateHeader.addEventListener('click', () => {
        sorting = !sorting;
        if (sorting) {
            sortDueDate() 
            todoItem()
        } 
        else {
            retrieveLocalStore()
            todoItem()
        }
    })
}

export {taskLog}
