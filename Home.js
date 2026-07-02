const reserveButton = document.getElementById("reserve-btn");

if (reserveButton) {
	reserveButton.addEventListener("click", function (event) {
		event.preventDefault();
		alert("Sorry, this feature is not working at the moment.");
	});
}