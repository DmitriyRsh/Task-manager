'use strict';
if(!localStorage.getItem('user')) {
	location.href='http://localhost:3000/logIn.html';
}
document.addEventListener('DOMContentLoaded', () => {
	const homePage = document.querySelector('.menu__link_home'),
		notifyPage = document.querySelector('.menu__link_notifications'),
		favoriteBtn = document.querySelector('.menu__link_favorite'),
		menuIcon = document.querySelector('.menu__icon'),
		profileList = document.querySelector('.profile__contain'),
		logOut = document.querySelector('.profile__logOut'),
		settings = document.querySelector('.profile__settings');
	
	if (localStorage.getItem('theme')) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	logOut.addEventListener('click', () => {
		location.href='http://localhost:3000/logIn.html';
	});
	settings.addEventListener('click', () => {
		location.href='http://localhost:3000/Settings.html';
	});
	homePage.addEventListener('click', () => {
		location.href='http://localhost:3000/main.html';
	});
	notifyPage.addEventListener('click', () => {
		location.href='http://localhost:3000/notifications.html';
	});
	favoriteBtn.addEventListener('click', () => {
		location.href='http://localhost:3000/favorite.html';
	});
	menuIcon.addEventListener('click', function() {
		location.href='http://localhost:3000/createTask.html';
	});
	const user = JSON.parse(localStorage.getItem('user'));
	function getAge(dateString) {
		let today = new Date();
		let birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();
	
		let m = today.getMonth() - birthDate.getMonth();
		let d = today.getDay() - birthDate.getDay();
	
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		if ( age === 0 ) {
			m = 1 + m;
			if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
				m--;
			}
		}
	
		return age ? age + ' years' : m + ' month';
	}

	function createProfile() {
		profileList.innerHTML = '';
		profileList.innerHTML += `
						<img class="profile__img" src="img/home-img.png" alt="avatar">
						<div class="profile__box">
                            <p class="profile__text">${user.name} ${user.lastName}</p>
                            <p class="profile__subtext">${user.city}</p>
							<p class="profile__subtext">${getAge(user.birthday)}</p>
                            <button class="profile__btn btn">Edit profile</button>
                        </div>
		`;
	}
	createProfile();
	const editBtn = document.querySelector('.profile__btn');
	editBtn.addEventListener('click', () => {
		location.href='http://localhost:3000/editProfile.html';
	});
});