'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const emailDb = document.getElementById('email'),
		passDb = document.getElementById('password'),
		repeatPass = document.getElementById('repeatpass'),
		name = document.getElementById('name'),
		lastname = document.getElementById('lastname'),
		city = document.getElementById('city'),
		date = document.getElementById('date'),
		createBtn = document.querySelector('.Registration__btn'),
		RegistrationLink = document.querySelector('.Registration__link'),
		inputs = document.querySelectorAll('.Registration__input'),
		RegistrationForm = document.querySelector('.Registration__form');

	let database = [];
	if(localStorage.getItem('database')) {
		database = JSON.parse(localStorage.getItem('database'));
	}
	if (localStorage.getItem('theme')) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	function createUser() {
		database.push({
			id: database.length + 1,
			email: emailDb.value,
			password: passDb.value,
			name: name.value,
			lastName: lastname.value,
			city: city.value,
			birthday : date.value
		});
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
			if (item.dataset.repeatpass == 'true') {
				if (repeatPass.value != passDb.value) {
					removeError(item);
					createError(item, 'Пароль не совпадает');
					result = false;
				}
			}
			if (item.dataset.email == 'true') {
				database.forEach((user, i) => {
					if(database[i].email == emailDb.value) {
						createError(item, 'Этот email уже зарегестрирован');
						result = false;
					}
				});
			}
		});
		return result;
	}
	RegistrationForm.addEventListener('submit', (e) => {
		e.preventDefault();
		if(validation(RegistrationForm) == true) {
			createUser();
			localStorage.setItem('database', JSON.stringify(database));
			resetForm();
			location.href='http://localhost:3000/logIn.html';
		}
	});
	createBtn.setAttribute('disabled', true);

	inputs.forEach(item => {
		item.oninput = function() {
			if (emailDb.value.length < 1 || passDb.value.length < 1 || name.value.length < 1 || lastname.value < 1 || city.value < 1 || date.value < 1) {
				createBtn.setAttribute('disabled', true);
			} else {
				createBtn.removeAttribute('disabled');
			}
		};
	});
	function resetForm() {
		emailDb.value = '';
		passDb.value = '';
		name.value = '';
		lastname.value = '';
		city.value = '';
		date.value = '';
	}
	RegistrationLink.addEventListener('click', function() {
		location.href='http://localhost:3000/logIn.html';
	});
	const d = new Date();
	const day = d.getDate();
	const month = d.getMonth() + 1;
	const year = d.getFullYear();
	date.max = year + '-' + month + '-' + day;
});