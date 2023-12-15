'use strict';
if(!localStorage.getItem('user')) {
	location.href='http://localhost:3000/logIn.html';
}
document.addEventListener('DOMContentLoaded', () => {
	const emailEdit = document.getElementById('emailEdit'),
		passwordEdit = document.getElementById('passwordEdit'),
		nameEdit = document.getElementById('nameEdit'),
		lastnameEdit = document.getElementById('lastnameEdit'),
		cityEdit = document.getElementById('cityEdit'),
		dateEdit = document.getElementById('dateEdit'),
		returnBtn = document.querySelector('.Edit__link'),
		editForm = document.querySelector('.Edit__form'),
		inputs = document.querySelectorAll('.Edit__input');
	returnBtn.addEventListener('click', () => {
		location.href='http://localhost:3000/profile.html';
	});
	
	if (localStorage.getItem('theme')) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	let user = JSON.parse(localStorage.getItem('user'));
	emailEdit.value = user.email;
	passwordEdit.value = user.password;
	nameEdit.value = user.name;
	lastnameEdit.value = user.lastName;
	cityEdit.value = user.city;
	dateEdit.value = user.birthday;
	let database = [];
	if (localStorage.getItem('database')) {
		database = JSON.parse(localStorage.getItem('database'));
	}
	
	function validation(form) {
		function removeError(input) {
			const parent = input.parentNode;
			if (parent.classList.contains('error')) {
				parent.querySelector('.error-label').remove();
				parent.classList.remove('error');
			}
		}
		function createError(input, text) {
			const parent = input.parentNode;
			const errorLabel = document.createElement('label');
			errorLabel.classList.add('error-label');
			parent.classList.add('error');
			errorLabel.textContent = text;

			parent.append(errorLabel);
		}
		let result = true;

		inputs.forEach(item => {
			removeError(item);
			
			if(item.value.length > 16) {
				createError(item, 'Не более 16 символов');
				result = false;
			}
			if(item.value.length < 2) {
				createError(item, 'Не менее 2 символов');
				result = false;
			}
			if (item.dataset.email == 'true') {
				database.forEach((user, i) => {
					if(database[i].email == emailEdit.value && database[i].email != user.email) {
						createError(item, 'Этот email уже зарегестрирован');
						result = false;
					}
				});
			}
		});
		return result;
	}
	editForm.addEventListener('submit', (e) => {
		e.preventDefault();
		if(validation(editForm) == true) {
			user = {
				id: user.id,
				email: emailEdit.value,
				password: passwordEdit.value,
				name: nameEdit.value,
				lastName: lastnameEdit.value,
				city: cityEdit.value,
				birthday: dateEdit.value
			};
			localStorage.setItem('user', JSON.stringify(user));
			
			let index = database.findIndex(item => item.id == user.id);
			database[index] = user;
			localStorage.setItem('database', JSON.stringify(database));
			location.href='http://localhost:3000/profile.html';
		}
	});
	const d = new Date();
	const day = d.getDate();
	const month = d.getMonth() + 1;
	const year = d.getFullYear();
	dateEdit.max = year + '-' + month + '-' + day;
});