
var path = require('path');
var express = require('express');
var router = express.Router(); 
//esto nos permite tener una aplicacion mas pequeña 

router.use(function (req, res, next) {
    console.log('Enrutamiento Canciones');
    next();
  });

//definicion de rutas
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'public','lista.html'));
});

router.post('/', function(req, res){
    res.send('Respuesta a POST');
});

router.put('/', function(req, res){
    res.send('Respuesta a PUT');
});

router.delete('/', function(req, res){
    res.send('Respuesta a DELETE');
});

/*
router.get('/descarga4', function (req, res) {
    res.download(path.join(__dirname,'public','files','invincible.jpg'),'invencible.jpg',
    res.console('prueba?'),
        function(err){
            if (err)
                console.log('Archivo Corrupto.');
            else
                console.log('Descarga Exitosa.');
        });
});
*/

module.exports = router;