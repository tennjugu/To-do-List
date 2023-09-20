
// table for storing inputs

const taskLog = () =>{
    let table = document.createElement('table')
    table.id = 'taskTable'

    let thead = document.createElement('thead')
    let headerRow = document.createElement('tr')


    let tableTitle = document.createElement('th')
    tableTitle.textContent = 'Title'
    headerRow.appendChild(tableTitle)

    let tableDescription = document.createElement('th')
    tableDescription.textContent = 'Description'
    headerRow.appendChild(tableDescription)

    let tableDate= document.createElement('th')
    tableDate.textContent = 'Date'
    headerRow.appendChild(tableDate)

    let tableTime= document.createElement('th')
    tableTime.textContent = 'Time'
    headerRow.appendChild(tableTime)

    let tablePriority= document.createElement('th')
    tablePriority.textContent = 'Priority'
    headerRow.appendChild(tablePriority)


    thead.appendChild(headerRow)


    let tbody = document.createElement('tbody')


    table.appendChild(thead)
    table.appendChild(tbody)


    let main = document.querySelector('.main')
    main.appendChild(table)

    return taskLog
}


export {taskLog}
