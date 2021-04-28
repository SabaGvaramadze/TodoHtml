let tasks = [];
let completedTasks=[];
let index = 0;

function addItem(){
	const input = document.querySelector('.todo-input');

	if(input.value == ''){return}

	const ucList = document.querySelector('.uncompleted-list');
	let newtask = document.createElement('li');

	let removeButton = document.createElement('button');
	removeButton.id = "removebutton" + index;
	removeButton.classList.add('removebutton');
	removeButton.innerText = 'x';
	removeButton.onclick = function () {
		removeItem(this.id);
	}

	newtask.classList.add('listItems');
	newtask.id = 'item' + index;
	newtask.innerHTML = input.value;
	newtask.appendChild(removeButton);
	newtask.onclick = function(){
		updateItem(this.id);
	}

	tasks.push(input.value);

	ucList.appendChild(newtask);

	input.value = '';
	index++;
}

function updateItem(id){
	const currentTask = document.querySelector('#'+ id);
	const cList = document.querySelector('.completed-list')
	const ucList = document.querySelector('.uncompleted-list')

	let newItem = currentTask;

	if(currentTask.parentNode.classList.value == 'completed-list'){
		newItem.style.textDecoration = 'none';
		currentTask.parentNode.removeChild(currentTask);
		
		completedTasks.push(currentTask.innerText);

		ucList.appendChild(newItem);
	}
	else{
		newItem.style.textDecoration = 'line-through';
		currentTask.parentNode.removeChild(currentTask);
		
		tasks.push(currentTask.innerText);
		
		cList.appendChild(newItem);
	}
}

function removeItem(id){
	const button = document.querySelector('#' + id);
	button.parentNode.parentNode.removeChild(button.parentNode);
}