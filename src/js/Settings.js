'use strict';
if(!localStorage.getItem('user')) {
	location.href='http://localhost:3000/logIn.html';
}
document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.Settings__theme'),
		exitArrow = document.querySelector('.Settings__exit');
	
    
	let el = document.documentElement;
	themeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (el.hasAttribute('data-theme')) {
			el.removeAttribute('data-theme');
			localStorage.removeItem('theme');
		} else {
			el.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		}
	});
	exitArrow.addEventListener('click', () => {
		location.href='http://localhost:3000/profile.html';
	});
	if (localStorage.getItem('theme')) {
		el.setAttribute('data-theme', 'dark');
	}
});

