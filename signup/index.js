document.getElementById('loginForm').addEventListener('submit', function(event) {
    // You can add form validation here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert('All fields are required.');
        event.preventDefault();
    }
});