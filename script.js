const listContainer = document.querySelector('ul');

const taskList = [
    'car wash',
    'cook'
]

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

        // appending li element to the ul element
        listContainer.appendChild(liElement);
        
    })
}
listPopulation();