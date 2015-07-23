var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(partials());
// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;


/*

Explicación de la tarea

Crear un repositorio en Github donde subir el proyecto que se les pide desarrollar en los 
siguientes apartados de esta práctica.

El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos 
en las transparencias de clase. No se permite clonar el repositorio oficial de la asignatura 
que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

Además se deben añadir los siguientes cambios a Quiz:

1) Modificar el servidor Quiz para añadir un enlace en el píe de página <footer> del marco de 
las páginas renderizadas que apunte a la página de su proyecto en GitHub.

2) Modificar el servidor Quiz para que sirva una nueva página con los datos de los autores de 
la práctica. Este desarrollo se realizará en una rama llamada créditos. Cree la rama creditos 
y cámbiese a ella para hacer el desarrollo pedido en este apartado.

Crear un nuevo enlace en la barra de navegación que apunte a la página de créditos. La ruta de 
acceso a esta página debe ser /author.
Modifique el router (routers/index.js) para que atienda las peticiones "GET /author" y sirva 
una nueva vista views/author.ejs con los datos de los autores o autor de la página, mostrando 
el nombre de los autores, su fotografía y un pequeño video (opcional) de 30 seg.
Cuando se haya terminado este desarrollo, integrelo en la rama master, y súbalo a GitHub.

Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar 
allí el servidor desarrollado en esta práctica.

Se deben seguir los mismos pasos explicados en las transparencias para realizar el despliegue.

Actualice GitHub con los cambios realizados en este apartado.

El proyecto desarrollado en esta practica, junto con todas las modificaciones añadidas, debe 
subirse al repositorio creado en Github por los alumnos.

Entregar en el texto de la entrega a MiriadaX

1) El URL al despliegue en Heroku como un enlace clicable.

2) El URL al proyecto en GITHUB como un enlace clicable.

El evaluador debe comprobar que en Heroku se ha desplegado la aplicación con los cambios 
solicitados y que en GITHUB se ha subido el proyecto y que los cambios solicitados se han 
introducido en el último commit.
*/
