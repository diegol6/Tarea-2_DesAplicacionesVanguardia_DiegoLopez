//npm init
//npm install express --save

var canciones = require('./canciones');
//se importa otra seccion de la pagina web
var express = require('express');
//se importa express
var path = require('path');
const { dirname } = require('path');
//se importa path para los directorios y concatenar
var app = express();
//se ejecutar la instancia de express

app.listen(3000, function () { 
    console.log('App escuchando en puerto 3000!');
  });

  //se escucha en el puerto 3000 y la function represanta un callback
  //asincronico

  ////////MIDDLEWARE GENERAL////
app.use(function (req, res, next) {
    //console.log('middleware server.js');
    next();
  });

  



  
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'public','canciones.html'));
});

app.get('/acerca', function(req,res){
    res.sendFile(path.join(__dirname, 'public','info.html'));
});

///////ROUTER//////
app.use('/canciones', canciones);

//metodo simbolico para el hipervinculo en la tabla de canciones
app.get('/descarga', function (req, res) {
    res.download(path.join(__dirname,'public','files','elrey.jpg'),'elrey.jpg',
        function(err){
            if (err)
                console.log('Archivo Corrupto.');
            else
                console.log('Descarga Exitosa.');
        });
});


//metodo para descargar canciones mediante query string
//ejemplo:
//http://localhost:3000/canciones/descarga?nombre=BeatIt&album=Thriller

app.get('/canciones/descarga', function (req, res) {
    var cancion =  'Cancion:' + req.query.nombre + ' ' + 'Album:'+ req.query.album; 
    res.download(path.join(__dirname,'public','files','albumes.jpg'),'albumes.jpg',
    function(err){
        if (err)
            console.log('Archivo Corrupto.');
        else
            console.log('Descarga Exitosa.');
    });
});

app.use(function(req, res, next) {
    res.status(404).send('Esa pagina no existe!');
  });