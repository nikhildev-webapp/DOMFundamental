function addTask() {
    let taskList = document.getElementById('taskList');
    let taskInput = document.getElementById('task')
    
    let taskValue = taskInput.value;
    let li = document.createElement('li')
    li.textContent = taskValue; 
    
    if (taskValue === '') {
        alert('Enter task')
        return
    }
    taskList.appendChild(li)
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'DeleteTask'
    deleteButton.className='deleteButton'
    taskList.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li)
        taskList.removeChild(deleteButton);
        return 
    })
   ``
    taskInput.value=''
}