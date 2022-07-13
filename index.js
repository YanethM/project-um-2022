const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;
/* const mongoose = require('mongoose'); */

/* Comentarios: Shift + Alt + a */
/* Verificar la apertura del puerto */
/* Shiftf + Alt + F para indentar el código */
app.listen(port, () => {
  console.log('Listenning for the port', port);
});
