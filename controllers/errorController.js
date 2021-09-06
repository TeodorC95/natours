module.exports = (err, req, res, next) => {
  // to define an error handling middleware, we need to add 4 arguments, and this function is error first function
  // console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
