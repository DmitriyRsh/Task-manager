'use strict';
if(!localStorage.getItem('user')) {
	location.href='http://localhost:3000/logIn.html';
}
document.addEventListener('DOMContentLoaded', () => {
	const menuIcon = document.querySelector('.menu__icon'),
		todayList = document.querySelector('.today__items'),
		notifyPage = document.querySelector('.menu__link_notifications'),
		homePage = document.querySelector('.menu__link_home'),
		profile = document.querySelector('.menu__link_profile');
	
	
	
	let tasks = [
		{
			id: 1,
			title: 'College',
			description: 'Design and Documentation meeting',
			time: '15.00',
			category:'College stuff',
			isFavorite: false,
			done: false,
			delete: false
			
		},
		{ 
			id: 2,
			title: 'Anova',
			description: 'ANOVA & ANCOVA practice',
			time: '20.30',
			category:'Study',
			isFavorite: false,
			done: false,
			delete: false
			
		},
		{
			id: 3,
			title: 'Shop',
			description: 'Grocery shopping',
			time: '18.15',
			category:'Home',
			isFavorite: false,
			done: false,
			delete: false
			
		},
	];
	if (localStorage.getItem('theme')) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	if(!localStorage.getItem('tasks')) {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	function saveStorage() {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	function render(filteredTasks = tasks) {
		todayList.innerHTML = '';
		filteredTasks.forEach(function(item) {
			const div = document.createElement('div');
			div.classList.add('today__item');
			if (localStorage.getItem('theme')) {
				div.style.backgroundColor = item.done ? '#E459CE' : '#8a81c3';
			} else {
				div.style.backgroundColor = item.done ? '#AFEEEE' : '#d1d0f9';
			}
			div.innerHTML += `
				<div class="today__contain" data-favorite="${item.isFavorite}">
				<div class="today__box">
				<p class="today__text">${item.title}</p>
				<p class="today__text">${item.category}</p>
				<button class="today__btn" data-id="${item.id}">
						<?xml version="1.0" ?><svg baseProfile="tiny" ${item.isFavorite ? 'fill = #6369D9' : 'fill = #D1D0F9'} id="Layer_1" version="1.2" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g>
						<path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506  
						c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    
						c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    
						s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    
						s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"/></g></g></svg>
				</button>
				</div>
								<p ${item.done ? 'class="today__subtext line-through"' : 'class="today__subtext"'}>${item.description}</p>
								<p class="today__time">${item.time}</p>
								<div class="delete" data-id="${item.id}">
									<?xml version="1.0" ?><svg version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
									.st0{opacity:0.2;fill:none;stroke:#000000;stroke-width:5.000000e-02;stroke-miterlimit:10;}
									</style><g id="grid_system"/><g id="_icons">
									<path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"/></g></svg>
								</div>
								<div class="done" data-id="${item.id}">
								<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" id="Layer_1" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M30.171,6.131l-0.858-0.858c-0.944-0.945-2.489-0.945-3.433,0L11.294,19.859l-5.175-5.174  c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.75c0.944,0.945,2.489,0.945,3.433,0  L30.171,9.564C31.112,8.62,31.112,7.075,30.171,6.131z" /></svg>
								</div>
							</div>
							`;
					
							
			todayList.append(div);
			tasks.sort((a, b) => a.done < b.done ? -1 : 1);
		});
	}
	if(window.location.pathname=='/favorite.html') {
		if (tasks.filter(item => item.isFavorite).length == 0) {
			todayList.innerHTML = '';
			// eslint-disable-next-line quotes
			todayList.innerHTML += `<h2 class="today__message">У вас пока что нет избранных задач</h2>`;
		} else {
			render(tasks.filter(item => item.isFavorite));
		}
	} else {
		render();
	}
	
	function deleteTask(DeleteId) {
		const index = tasks.findIndex(item => item.id == DeleteId);
		if (index > -1) tasks.splice(index, 1);
		if(window.location.pathname=='/favorite.html') {
			render(tasks.filter(item => item.isFavorite));
		} else {
			render();
			tasks.forEach((item, i) => {
				tasks[i].id = i + 1;
			});
		}
		saveStorage();
	}
	function setFavoriteTask(id) {
		const index = tasks.findIndex(item => item.id == id);
		if (index > -1) tasks[index].isFavorite = !tasks[index].isFavorite;
		if(window.location.pathname=='/favorite.html') {
			render(tasks.filter(item => item.isFavorite));
		} else {
			render();
		}
		saveStorage();
	}
	function setCompletedTask(id) {
		const index = tasks.findIndex(item => item.id == id);
		if (index > -1) tasks[index].done = !tasks[index].done;
		tasks.sort((a, b) => a.done < b.done ? -1 : 1);
		if(window.location.pathname=='/favorite.html') {
			render(tasks.filter(item => item.isFavorite));
		} else {
			render();
		}
		saveStorage();
	}
	todayList.addEventListener('click', (e) => {
		if (e.target && e.target.classList.contains('delete')) {
			deleteTask(e.target.getAttribute('data-id'));
			if(window.location.pathname=='/favorite.html') {
				if (tasks.filter(item => item.isFavorite).length == 0) {
					todayList.innerHTML = '';
					// eslint-disable-next-line quotes
					todayList.innerHTML += `<h2 class="today__message">У вас пока что нет избранных задач</h2>`;
				}
			}
		} else if(e.target && e.target.classList.contains('today__btn')) {
			setFavoriteTask(e.target.getAttribute('data-id'));
			if(window.location.pathname=='/favorite.html') {
				if (tasks.filter(item => item.isFavorite).length == 0) {
					todayList.innerHTML = '';
					// eslint-disable-next-line quotes
					todayList.innerHTML += `<h2 class="today__message">У вас пока что нет избранных задач</h2>`;
				}
			}
		} else if(e.target && e.target.classList.contains('done')) {
			setCompletedTask(e.target.getAttribute('data-id'));
		}
	});
	let favoriteBtn = document.querySelector('.menu__link_favorite');
	
	notifyPage.addEventListener('click', () => {
		location.href='http://localhost:3000/notifications.html';
	});
	profile.addEventListener('click', () => {
		location.href='http://localhost:3000/profile.html';
	});
	if(window.location.pathname=='/favorite.html') {
		homePage.addEventListener('click', () => {
			location.href='http://localhost:3000/main.html';
		});
	}
	favoriteBtn.addEventListener('click', () => {
		location.href='http://localhost:3000/favorite.html';
	});
	menuIcon.addEventListener('click', function() {
		location.href='http://localhost:3000/createTask.html';
	});
});

