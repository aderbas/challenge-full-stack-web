/**
 * Util's functions
 */

/**
 * Send error response
 */
errorMessage = (message='An error has occurred',code=500) => ({
  data: null,
  len: 0,
  message: message,
  code: code
});

/**
 * Send success response
 */
const dataSuccess = (data, total=undefined) => ({
  data: data?data:[],
  len: (total)?total:(data?data.length:0),
  code: 200
})

module.exports = {
  errorMessage,
  dataSuccess
}