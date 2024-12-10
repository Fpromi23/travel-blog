
document.getElementById("travelForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Store data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    alert("Form submitted! Your data has been saved.");
});




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Storage Example</title>
</head>
<body>

<h1>Welcome to our Travel Blog!</h1>

<!-- Form to input name -->
<input type="text" id="userName" placeholder="Enter your name">
<button onclick="saveName()">Save Name</button>

<p id="welcomeMessage"></p>

<script>
// Check if there is a name saved in local storage
window.onload = function() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('welcomeMessage').innerText = `Welcome back, ${savedName}!`;
    }
}

// Function to save the name to local storage
function saveName() {
    const name = document.getElementById('userName').value;
    if (name) {
        localStorage.setItem('userName', name);
        document.getElementById('welcomeMessage').innerText = `Welcome, ${name}!`;
    }
}
</script>

</body>
</html>
