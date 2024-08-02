document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    // Mengambil nilai input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validasi form
    const messageElement = document.getElementById('message');
    if (password !== confirmPassword) {
        messageElement.textContent = 'Kata sandi tidak cocok!';
    } else if (username === '' || email === '' || password === '') {
        messageElement.textContent = 'Semua field harus diisi!';
    } else {
        messageElement.textContent = ''; // Clear message
        // Proses registrasi (misalnya mengirim data ke server)
        // Misalnya, Anda dapat menggunakan fetch API untuk mengirim data ke server
        console.log('Registrasi berhasil:', { username, email, password });
        alert('Registrasi berhasil!');
    }
});