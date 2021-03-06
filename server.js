// Script alternativo para criar um server node.js

const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, '/')));
app.set('views', path.join(__dirname, '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req,res) =>{
    res.render('index.html');
    console.log('Render: /index.html');
})

server.listen(3000, function(){
    console.log('Server node.js rodando em: localhost:3000');
});