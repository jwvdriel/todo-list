// * get html elements
let addTask = document.querySelector('#add-task');
let inputTask = document.querySelector('#task-input');
let listItem = document.querySelectorAll('.list-item');
let yearList = document.querySelector('.date');
let dayAdded = document.querySelector('.time-added');


// array of days
const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

//* add task function
let addTodo = () => {
    addTask.addEventListener('click', () => {    

        
        // get value of input
        let inputValue = inputTask.value;

        // checking if input field is empty
        if (inputValue !== '' ) {
            // create new html element
            let newTask = document.createElement('li');
            newTask.innerHTML = `${inputValue} <br>
            <span class='added'>${dayAdded}</span>`;

            // add new task to UL element and add class
            let taskAdded = document.querySelector('#task-list');
            taskAdded.appendChild(newTask).classList.add('list-item');

            // add the nodelist into a array
            let newItem = Array.from(listItem);
            newItem.push(newTask);

            // delete function
            deleteTodo(newTask);

            // clears input field
            inputTask.value = '';
        } else {
            // if input value is empty
            alert(`voer een nieuwe taak in`);
        }
    });
};

//*  delete function
let deleteTodo = (item) => {
    item.addEventListener('click', () => {
        // adds css style to item
        item.classList.add('remove');
        // time it takes to remove  HTML element
        setTimeout(() => {
            item.remove();
        }, 500);
    });
};

//* show year 
let date = new Date();
yearList.innerHTML = date.getFullYear();

//* day, time, month 
dayAdded  = `${date.getDay()} ${months[date.getMonth()]} ${date.toLocaleTimeString('en-US', {hour12: false})}`;

//* add list item function
addTodo();




