const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileNavbar = document.getElementById("mobile-navbar-container");

menuIcon.addEventListener("click", openNavbar);

function openNavbar() {
	if ((mobileNavbar.style.display = "none")) {
		mobileNavbar.style.display = "flex";
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	}
}

closeIcon.addEventListener("click", closeNavbar);

function closeNavbar() {
	if ((mobileNavbar.style.display = "flex")) {
		mobileNavbar.style.display = "none";
		document.body.style.backgroundColor = "";
	}
}
