
/**
 * Module dependencies.
 */

var express = require('express'),
    http    = require('http'),
    routes  = require('./routes'),
    path    = require('path'),
    user    = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;   // development. 
//app.locals.pretty = false;  // production.
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/caler', routes.caler);
app.get('/capacitaciones', routes.capacitaciones);
app.get('/contacto', routes.contacto);
app.get('/servicios', routes.servicios);
app.get('/users', user.list);
app.get('/asesorias/ISO17025', routes.asesoriasISO17025);
app.get('/asesorias/ISO15189', routes.asesoriasISO15189);
app.get('/asesorias/ISO9001', routes.asesoriasISO9001);
app.get('/cursos/ISO17025', routes.cursosISO17025);
app.get('/cursos/ISO15189', routes.cursosISO15189);
app.get('/auditorias/ISO17025', routes.auditoriasISO17025);
app.get('/auditorias/ISO15189', routes.auditoriasISO15189);
app.get('/capacitaciones/inscripcion', routes.inscripcion);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});