const html = document.getElementsByTagName('html')[0];

try {
	const storageTheme = localStorage.getItem('theme');
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	const currentTheme = storageTheme || systemTheme;

	if (currentTheme === 'dark') {
		html.classList.add('darkmode');
		localStorage.setItem('theme', 'dark');
	} else {
		html.classList.remove('darkmode');
		localStorage.setItem('theme', 'light');
	}
} catch (_) {}

window.addEventListener('DOMContentLoaded', () => {
	try {
		const darkIcon = document.getElementById('dark-mode-icon');
		const lightIcon = document.getElementById('light-mode-icon');

		const storageTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		const currentTheme = storageTheme || systemTheme;

		if (currentTheme === 'dark') {
			darkIcon.classList.add('active');
			lightIcon.classList.remove('active');
		} else {
			lightIcon.classList.add('active');
			darkIcon.classList.remove('active');
		}
	} catch (_) {}
});

const themeModeToggle = () => {
	const darkIcon = document.getElementById('dark-mode-icon');
	const lightIcon = document.getElementById('light-mode-icon');

	const storageTheme = localStorage.getItem('theme');
	const nextTheme = storageTheme === 'dark' ? 'light' : 'dark';
	localStorage.setItem('theme', nextTheme);

	if (nextTheme === 'dark') {
		html.classList.add('darkmode');
		darkIcon.classList.add('active');
		lightIcon.classList.remove('active');
	} else {
		html.classList.remove('darkmode');
		lightIcon.classList.add('active');
		darkIcon.classList.remove('active');
	}
};
