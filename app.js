const express = require( 'express' );
const app = express();
const path = require('path');

app.use( '/static', express.static(__dirname + '/public'));

app.get('/home', (request, response)=>{
    response.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/login', (request, response)=>{
    response.sendFile(path.join(__dirname, 'views/login.html'));
});
app.get('/register', (request, response)=>{
    response.sendFile(path.join(__dirname, 'views/register.html'));
});

app.listen( 3000, ()=>{
    console.log('El servidor está corriendo');
});