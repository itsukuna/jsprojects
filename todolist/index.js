const container = document.querySelector('.root');
const heading = document.createElement('h1');

heading.textContent="To Do List";

const inputArea = document.createElement('div');
const inputField = document.createElement('input');
const addButton = document.createElement('button');
const taskList = document.createElement('ul');

addButton.textContent= "Add to list"
addButton.addEventListener('click', function(){
    const task = inputField.value

    if (task){
        const taskItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent= 'delete';
        
        deleteButton.addEventListener('click', function(){
            taskList.removeChild(taskItem)
        });
        
        taskItem.textContent =task;
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        inputField.value = ''
    } else {
        alert('please enter task')
    }
})

inputArea.append(inputField, addButton)
container.append(heading, inputArea, taskList)

