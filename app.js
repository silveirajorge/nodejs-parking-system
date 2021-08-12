var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Require Method-Override
const methodOverride = require("method-override");

// Require Express-Session
const session = require("express-session");

// Require Handlebars
const hbs = require("hbs");

// BD Connection
const connection = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Route Cars
const carsRouter = require("./routes/cars");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Helpers HBS
hbs.registerHelper("equals", (val1, val2, options) => {
  return val1 === val2 ? options.fn(this) : options.inverse(this);
});

// Include new Middleware
app.use(session({
  secret: 'parkingsystem'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use methodOverride
app.use(methodOverride((req, res, next) => {
  if (req.body && typeof req.body === 'object' && req.body._method) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/cars", carsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
