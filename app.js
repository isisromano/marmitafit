var createError = require("http-errors");
//1 IMPORTAR O EXPRESS
const express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session =  require("express-session");
const UsuariosRouter = require('./routes/UsuariosRouter'); 
var app = express();
// 3 CRIAR UMA ROTA QUE RESPONDA AO CLIENTE
app.use(
  session({
    secret: 'CHAVE-SECRETA',
    resave: false,
    saveUninitialized: true
  })
  );
  app.use(express.static("public"));
  app.use ('/usuarios', UsuariosRouter);
  // DECLARAÇÃO DE MIDDLEWARE GLOBAIS (PRECISA????????)

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");
// 2 CRIAR UMA APLICAÇÃO EXPRESS


                        
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", loginRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
