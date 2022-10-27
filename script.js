const listContainerSelector = document.querySelector('ul');
const inputSelector = document.querySelector('.input-field');
const formSelector = document.querySelector('form');
const taskCounterSelector = document.querySelector('.task-counter');

const taskList = [
    // tasks will be added here
];

function listPopulation() {
    listContainerSelector.innerHTML = ''; // avoiding stacking up same li elements after submitting
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
        
    });
    taskCounterSelector.innerHTML = taskList.length; // displaying the taskList array length in the header
    inputSelector.value = ''; // clearing the input field after submitting
}
listPopulation();

function deleteTask(event) {
    // selecting the paragraph inside span element to be indexed
    const task = event.target.parentElement.parentElement.children[1].innerText;

    // selecting the index of the task to be removed
    const index = taskList.indexOf(task);

    if (index !== -1) {
        taskList.splice(index, 1);
    }; 
    listPopulation();
}

function addTask() {
    // checking if input has a value && there is no white space in the input && value does not repeat
    if(inputSelector.value && noWhiteSpace(inputSelector.value) && !taskList.includes(inputSelector.value)) {
        taskList.push(inputSelector.value);       
    }
    listPopulation();   
}

formSelector.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
})

function noWhiteSpace(string) {
    const spacelessString = string.trim();
    return spacelessString.length > 0;
}



