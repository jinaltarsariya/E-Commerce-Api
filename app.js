var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

const adminRoute = require("./routes/AdminRoute");
const userRoute = require("./routes/UserRoute");
const sallerRoute = require("./routes/SallerRoute");
const categoryRoute = require("./routes/CategoryRoute");
const productRoute = require("./routes/ProductRoute");
const wishListRoute = require("./routes/WishListRoute");
const addToCartRoute = require("./routes/AddToCartRoute");
const purchageRoute = require("./routes/PurchageRoute");

var app = express();

mongoose
  .connect(
    "mongodb+srv://jinal:Jinal_developer@cluster0.izpspe0.mongodb.net/E_commerce"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err.messagez);
  });
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", adminRoute);
app.use("/", userRoute);
app.use("/", sallerRoute);
app.use("/", categoryRoute);
app.use("/", productRoute);
app.use("/", wishListRoute);
app.use("/", addToCartRoute);
app.use("/", purchageRoute);

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
