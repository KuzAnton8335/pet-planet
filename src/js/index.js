const buttons = document.querySelectorAll(".store__categories-button");

const changeActiveBtn = (event) => {
	const target = event.target;

	buttons.forEach((button) => {
		button.classList.remove("store__categories-button_active");
	});
	target.classList.add("store__categories-button_active");
}

buttons.forEach((button) => {
	button.addEventListener("click", changeActiveBtn)
})