const express = require('express');
const app = express();
const paginasRouter = require('./routes/paginas');
const PORT = 3009;

app.use(express.static('public'));

app.use('/', paginasRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
