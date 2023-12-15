'use strict';
if(!localStorage.getItem('user')) {
	location.href='http://localhost:3000/logIn.html';
}
document.addEventListener('DOMContentLoaded', () => {
	const exitArrow = document.querySelector('.create__arrow'),
		textarea = document.querySelector('.create__textarea'),
		resetBtn = document.querySelector('.create__reset'),
		saveBtn = document.querySelector('.create__btn'),
		title = document.getElementById('title'),
		time = document.getElementById('time'),
		categoryItem = document.querySelectorAll('.create__item');
	if (localStorage.getItem('theme')) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	function saveStorage() {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	function createTasks() {
		const categoryActive = document.querySelector('.active-category');
		tasks.push({
			category: categoryActive.innerText,
			id: tasks.length + 1,
			title: title.value,
			description: textarea.value,
			time: time.value,
			isFavorite: false,
			done: false,
			delete: false,
		});
	}
	
	saveBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const categoryActive = document.querySelector('.active-category');
		if (title.value !== '' && textarea.value !== '' && time.value !== '' && categoryActive !== null) {
			createTasks();
			resetForm();
			saveStorage();
			location.href='http://localhost:3000/main.html';
		} else {
			alert('Нужно заполнить все поля');
		}
	});
	function resetForm() {
		title.value = '';
		time.value = '';
		textarea.value = '';
		categoryItem.forEach(item => {
			item.classList.remove('active-category');
		});
	}
	resetBtn.addEventListener('click', function() {
		resetForm();
	});
	const categoryItems = document.querySelector('.create__items');
	
	categoryItems.addEventListener('click', function (e) {
		e.preventDefault();
		let target = e.target;
		if(target.classList.contains('create__item')) {
			for(let i = 0; i < categoryItem.length; i++) {
				categoryItem[i].classList.remove('active-category');
			}
			target.classList.add('active-category');
		}
	});
	exitArrow.addEventListener('click', function() {
		location.href='http://localhost:3000/main.html';
	});
});