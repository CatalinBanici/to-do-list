const listContainerSelector = document.querySelector('ul');
const inputSelector = document.querySelector('.input-field');
const formSelector = document.querySelector('form');

const taskList = [
    'test1',
    'test2',
    'test3'
];

function deleteTask(event) {
    const task = event.target.parentElement.parentElement.children[1].innerText;
    console.log(task)
    const index = taskList.indexOf(task);
    console.log(index)
    if (index !== -1) {
        taskList.splice(index, 1);
    }; 
    console.log(taskList)
}

function listPopulation() {
    taskList.forEach((task) => {
        // create li element
        const liElement = document.createElement('li');
        liElement.setAttribute('class', 'list');
        
        // create span with input checkbox element
        const spanElement1 = document.createElement('span');
        spanElement1.setAttribute('class', 'input-checkbox');
        const checkElement = document.createElement('input');
        checkElement.type = 'checkbox';
        checkElement.name = '';
        checkElement.id = '';
        spanElement1.appendChild(checkElement);
        liElement.appendChild(spanElement1);
        
        // create span with p element
        const spanElement2 = document.createElement('span');
        spanElement2.setAttribute('class', 'paragraph')
        const pElement = document.createElement('p');
        pElement.innerHTML = task;
        spanElement2.appendChild(pElement);
        liElement.appendChild(spanElement2);

        // create span with delete element
        const spanElement3 = document.createElement('span');
        spanElement3.setAttribute('class', 'delete');
        const deleteElement = document.createElement('i');
        deleteElement.setAttribute('class', 'fa-solid fa-trash');
        spanElement3.appendChild(deleteElement);
        liElement.appendChild(spanElement3);

        // adding event listener to delete element
        deleteElement.addEventListener('click', (event) => deleteTask(event));

        // appending li element to the ul element
        listContainerSelector.appendChild(liElement);
        
    })
}
listPopulation();

function addTask() {
    taskList.push(inputSelector.value);
    console.log(taskList)
}
addTask()

formSelector.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
})