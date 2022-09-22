let colorBar = document.querySelectorAll(".colorBar");

colorBar.forEach((element) => {
	element.style.backgroundColor = "#" + element.id;
});
