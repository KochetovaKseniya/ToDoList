/*Функция которая проверяет поле ввода, и запускает соответствующею функции если все ок*/
document.querySelector('.add-todo').addEventListener('click', function(e){
	var field = document.querySelector('.field-todo');

	if (field.value && field.value !== ' ') {
		addTodo(field);
		field.value = '';
	}
});

document.querySelector('.field-todo').addEventListener('keydown', function(e){
	if(e.keyCode === 13 && this.value && this.value !== ' ') {
		addTodo(this);
		this.value = '';
	}
});

//Очистка значения поля по клику
document.querySelector('.clean-value').addEventListener('click', function(e){
	var field = document.querySelector('.field-todo');
	field.value = ''; 
});

//Функция добавления списка
function addTodo(field) {

	var fieldValue = field.value;
	var todoList = document.querySelector('.todo');

	var elements = {
		li: document.createElement('li'),
		buttonsWrap: document.createElement('div'),
		addCheck: document.createElement('a'),
		deleteTodo: document.createElement('a'),
		faCheck: document.createElement('i'),
		faTrash: document.createElement('i'),
    };  

	//Присваиваем элементам нужные классы
	elements.buttonsWrap.classList.add('buttons');
	elements.addCheck.classList.add('add-check');
	elements.deleteTodo.classList.add('delete-todo');
	elements.faCheck.classList.add('fa', 'fa-check');
    elements.faTrash.classList.add('fa', 'fa-trash');

	//Добавляем элементы в нужные теги
	elements.addCheck.appendChild(elements.faCheck);
	elements.deleteTodo.appendChild(elements.faTrash);

	elements.buttonsWrap.appendChild(elements.addCheck);
	elements.buttonsWrap.appendChild(elements.deleteTodo);

	elements.li.innerHTML = elements.li.innerHTML + fieldValue;
	elements.li.appendChild(elements.buttonsWrap);
	
	todoList.insertBefore(elements.li, todoList.firstChild);

	document.querySelector('.delete-todo').addEventListener('click', deleteTodo);
    document.querySelector('.add-check').addEventListener('click', completeTodo);
        
}
//Функция выполненния задачи
function completeTodo() {
	this.closest('li').classList.toggle('fill');
	allCheckList();
}

//Функция удаления списка
function deleteTodo() {
	this.closest('li').remove();
	allCheckList();
}

//Функция счетчика задач и их выполнения 
function allCheckList() {
	var allCheckElement = document.querySelectorAll('.fill');
    var countElement = document.querySelector('.count');
    var countAllElement = document.querySelectorAll('li');

    countElement.innerHTML = allCheckElement.length + ' of ' + countAllElement.length + ' tasks done';
    
    if(allCheckElement.length == countAllElement.length) {
        countElement.innerHTML = 'Keep it up!'
    }
    
    if(allCheckElement.length == 0) {
        countElement.innerHTML = '0' + ' of ' + countAllElement.length + ' tasks done';
    }
}    

//function toSessionStorage() {
    sessionStorage.setItem('key', field);

    if (sessionStorage.getItem("autosave")) {
        // восстанавливаем содержимое 
        field.value = sessionStorage.getItem("autosave");
    }

    field.addEventListener("change", function() {
        // отслеживаем все изменения и сохраняем в объект session storage
        sessionStorage.setItem("autosave", field.value);
    });

