
(() => {
	const hamburgerButtons = document.querySelectorAll('.hamburger-button');

	hamburgerButtons.forEach(button => {
		button.addEventListener('click', hamburgerToggle);
	});

	function hamburgerToggle() {
		let button = this;
		button.classList.add('animation');
		button.classList.toggle('active');

		let clone = button.cloneNode(true);
		button.parentNode.replaceChild(clone, button);
		clone.addEventListener('click', hamburgerToggle);
	}
})();

