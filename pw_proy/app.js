const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//configuracion para el uso peticiones post
app.use(bodyParser.urlencoded({ extended: false }));

//css
app.use(express.static('public'));

//platillas que sean dinamicas
app.set('view engine', 'ejs');

//crear la conexion
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: 'aa9797', // tu contraseña de MySQL
    database: 'node_crud',
    port: 3306
});


//comprobacion de la conexion de la base de datos
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});


//const hostname= '192.168.56.1';
//Iniciar el servidor
const port = 3009;
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor en funcionamiento desde http://192.168.1.69:${port}`);
});

/*
const port = 3006;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});
*/

//index
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});


//ir a add
app.get('/add', (req, res) => {
    res.render('add');
});

//agregar usuarios
app.post('/add', (req, res) => {
    const { nombre, email, edad, genero, nacion, telefono, escuela } = req.body;
    const query = 'INSERT INTO users (nombre, email, edad, genero, nacion, telefono, escuela) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre, email, edad, genero, nacion, telefono, escuela], (err) => {
        if (err) {
            console.error('Error adding user:', err);
            res.send('Error');
        } else { 
            res.redirect('/');
        }
    });
});


//ir a edit
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});
//editar
app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, edad, genero, nacion, telefono, escuela } = req.body;

    const query = `
        UPDATE users 
        SET nombre = ?, email = ?, edad = ?, genero = ?, nacion = ?, telefono = ?, escuela = ?
        WHERE id = ?`;
    
    db.query(query, [nombre, email, edad, genero, nacion, telefono, escuela, id], (err) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.send('Error');
        } else {
            res.redirect('/'); // Redirigir 
        }
    });
});



//eliminar usuario

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});