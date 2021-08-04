

/**
 * Handler erros
 */
const handlerRequestErros = (error, req, res, next) => {
  if(error.name === 'UnauthorizedError'){
    return res.status(401).send({
      error: true,
      success: false,
      message: error.message
    });
  }
  return res.status(500).send({
    error: true,
    success: false,
    message: error.message
  });  
}

module.exports = { handlerRequestErros };