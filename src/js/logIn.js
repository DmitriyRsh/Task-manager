'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const logIn = document.querySelector('.welcome__btn'),
		  useremail = document.getElementById('user'),
		  pass = document.getElementById('pass'),
		  addInput = document.querySelectorAll('.welcome__input'),
		  createAccount = document.querySelector('.welcome__link');
	let database = [];
	logIn.setAttribute('disabled', true);
	addInput.forEach(item => {
		item.oninput = function() {
			if (useremail.value.length < 1 || pass.value.length < 1) {
				logIn.setAttribute('disabled', true);
			} else {
				logIn.removeAttribute('disabled');
			}
		};
	});
	if (localStorage.getItem('theme')) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	if(localStorage.getItem('user')) {
		localStorage.removeItem('user');
	}
	if(localStorage.getItem('database')) {
		database = JSON.parse(localStorage.getItem('database'));
	} else {
		localStorage.setItem('database', JSON.stringify(database));
	}
	logIn.addEventListener('click', function(e) {
		e.preventDefault();
		const user = database.find(function (item) {
			return item.email == useremail.value && item.password == pass.value;
		});
		if (user != undefined) {
			location.href='http://localhost:3000/main.html';
			localStorage.setItem('user', JSON.stringify(user));
			useremail.value = '';
			pass.value = '';
		} else {
			alert('Нет аккаунта с таким паролем и email');
		}
	});
	createAccount.addEventListener('click', function(e) {
		e.preventDefault();
		location.href='http://localhost:3000/Registration.html';
	});

});