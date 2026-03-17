document.addEventListener("DOMContentLoaded", function() {
	const elements = document.querySelectorAll("[data-include]");
	elements.forEach(function(el) {
		const file = el.getAttribute("data-include");
		fetch(file)
		.then(response => response.text())
		.then(data => {
			el.innerHTML = data;
		});
	});
});