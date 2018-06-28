var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Takes a swagger JSON document and sets up express HTTP routes bound to middleware functions. 
All routing is therefore driven from the swagger documentation. - As in https://www.npmjs.com/package/swagger-express-router*/
const swagger = require('swagger-express-router');

/* For the Swagger UI documentation. 
http://localhost:5000/v1/docs/ will open the API doc on browser */
const swaggerUi = require('swagger-ui-express');

const YAML = require('yamljs');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*      Routes and documentaion - STARTS HERE -            */

const swaggerDocument = YAML.load('./yaml/api-swagger.yaml');
const useBasePath = true;
const middlewareObj = {
	'users': require('./api/controllers/users.js')
};
app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
swagger.setUpRoutes(middlewareObj, app, swaggerDocument, useBasePath);

/*      Routes and documentaion - ENDS HERE -            */


// Start the UNIX socket and listen for connections
app.listen(5000, (err) => {
	console.log('Server up & running');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
