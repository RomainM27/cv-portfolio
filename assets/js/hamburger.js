
(() => {
	const hamburgerButtons = document.querySelectorAll('.hamburger-button');
	const mobileMenu = document.querySelector(".mobile")
	const mobileMenuBg = document.querySelector(".mobile_menu-bg")

	hamburgerButtons.forEach(button => {
		button.addEventListener('click', hamburgerToggle);
	});

	function hamburgerToggle() {
		let button = this;
		button.classList.add('animation');
		button.classList.toggle('active');
		mobileMenu.classList.toggle("hidden")
		mobileMenuBg.classList.toggle("mobile_menu-bg-open")

		let clone = button.cloneNode(true);
		button.parentNode.replaceChild(clone, button);
		clone.addEventListener('click', hamburgerToggle);
	}
})();

