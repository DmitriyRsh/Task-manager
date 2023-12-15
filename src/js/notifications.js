'use strict';
if(!localStorage.getItem('user')) {
	location.href='http://localhost:3000/logIn.html';
}
document.addEventListener('DOMContentLoaded', () => {
	const homePage = document.querySelector('.menu__link_home'),
		profile = document.querySelector('.menu__link_profile'),
		favoriteBtn = document.querySelector('.menu__link_favorite'),
		menuIcon = document.querySelector('.menu__icon');
	if (localStorage.getItem('theme')) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	homePage.addEventListener('click', () => {
		location.href='http://localhost:3000/main.html';
		
	});
	profile.addEventListener('click', () => {
		location.href='http://localhost:3000/profile.html';
	});
	favoriteBtn.addEventListener('click', () => {
		location.href='http://localhost:3000/favorite.html';
	});
	menuIcon.addEventListener('click', function() {
		location.href='http://localhost:3000/createTask.html';
	});
});