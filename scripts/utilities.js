const themeToggleAnimate = (e) => {
	e.classList.remove('animate');
	void e.offsetWidth;
	e.classList.add('animate');
};

const nameWriter = (e, text) => {
	if (!localStorage.getItem('isTyped')) {
		e.innerHTML = '';
		const timeout = Math.floor(Math.random() * (700 - 400 + 1) + 400);

		if (text.length > 0) {
			for (let i = 0; i <= text.length - 1; i++) {
				setTimeout(() => (e.innerHTML += text.charAt(i)), timeout * i);
			}
		}

		localStorage.setItem('isTyped', true);
	}
};

const resetNameWriter = () => {
	localStorage.removeItem('isTyped');
	window.location.reload();
};

const dropdownMenuToggle = (e) => {
	const iconElement = e.firstElementChild.firstElementChild;
	const mobileNavigationElement = e.parentElement.parentElement.children[1];

	const dropdownIconDPath =
		'M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z';
	const closeIconDPath =
		'M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z';

	const nextIconDPath = iconElement.getAttribute('d') === dropdownIconDPath ? closeIconDPath : dropdownIconDPath;

	void e.offsetWidth;
	iconElement.setAttribute('d', nextIconDPath);
	mobileNavigationElement.classList.toggle('visible');
};

const formVisibleToggle = (e) => {
	const toggleButton = e;
	const formContainer = e.parentElement.children[1];

	if (toggleButton.innerText === 'Fill in the Form?') toggleButton.innerText = 'X';
	else toggleButton.innerText = 'Fill in the Form?';
	toggleButton.classList.toggle('close');
	formContainer.classList.toggle('visible');
};
