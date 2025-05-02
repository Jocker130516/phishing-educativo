document.getElementById('loginForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        // Puedes agregar más validaciones aquí si es necesario
        console.log('Formulario enviado:', { email, password });
    }
});