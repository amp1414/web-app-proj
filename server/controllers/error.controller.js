// server/controllers/error.controller.js

const getErrorMessage = (err) => {
    let message = '';
  
    if (err.code) {
      switch (err.code) {
        case 11000:
        case 11001:
          message = 'This value already exists';
          break;
        default:
          message = 'unknown error';
      }
    } else {
      for (let errName in err.errors) {
        if (err.errors[errName].message) message = err.errors[errName].message;
      }
    }
  
    return message;
  };
  
  const errorHandler = (err, req, res, next) => {
    if (err) {
      res.status(500).send({ error: getErrorMessage(err) });
    } else {
      next();
    }
  };
  
  export { getErrorMessage, errorHandler };
  