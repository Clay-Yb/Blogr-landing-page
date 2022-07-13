const navMenu = document.querySelector(".nav_menu");
const navToggle = document.querySelector(".nav_toggle");
const navIcon = document.querySelector(".bx-menu");
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.toggle("show_menu");

		if (navIcon.className == "bx bx-x") {
			navIcon.className = "bx bx-menu";
		} else {
			navIcon.className = "bx bx-x";
		}
	});
}

const navLink = document.querySelectorAll(".nav_link");
const removeHeader = () => {
	navMenu.classList.remove("show_menu");
	navIcon.className = "bx bx-menu";
};

navLink.forEach((n) => n.addEventListener("click", removeHeader));

const header = document.querySelector(".header");
const scrollHeader = () => {
	this.scrollY > 50
		? header.classList.add("scroll_header")
		: header.classList.remove("scroll_header");
};

window.addEventListener("scroll", scrollHeader);
