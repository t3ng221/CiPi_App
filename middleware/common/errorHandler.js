const createError = require("http-errors");
//404 error Handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Requested content was not found"));
}

//default errorHandler
function errorHandler(err, req, res, next) {
  res.locals.error = process.env.NODE_ENV = "development"
    ? err
    : { message: err.message };
  res.status(err.status || 500);
  if (res.locals.html) {
    //html response
    res.render("error", {
      title: "Errpr Page",
    });
  } else {
    //json response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
