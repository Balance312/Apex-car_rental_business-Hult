document.getElementById("form-message").style.display = "none";
document.getElementById("scroll-to-form").addEventListener("click", function () {
    document.getElementById("form").scrollIntoView({ behavior: "smooth", block: "start" });
});
if (document.getElementById("form")) {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("form-message").style.display = "block";
        document.getElementById("form-message").textContent = "Your request has been submitted successfully!";
        document.getElementById("form").reset();
        document.getElementById("form-message").style.color = "green";
    });}
    

const reserveButton = document.getElementById("reserve-btn");

if (reserveButton) {
	reserveButton.addEventListener("click", function (event) {
		event.preventDefault();
		alert("Sorry, this feature is not working at the moment.");
	});
}