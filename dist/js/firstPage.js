const nextTask = document.querySelector('.task-next');
nextTask.addEventListener('click', function(e) {
	location.href='http://localhost:3000/logIn.html';
});
if (localStorage.getItem('theme')) {
	document.documentElement.setAttribute('data-theme', 'dark');
}