/**
 * Index file for the server
 * @author Aderbal Nunes <aderbalnunes@gmail.com>
 */

/**
 * imports
 */
const http  = require('http');
const { app } = require('./app');

/**
 * Config constants
 */
const HTTP_PORT  = process.env.HTTP_PORT || 8080; //  check if nothing running on port 8080

/**
 * Server
 */
http.createServer(app).listen(HTTP_PORT);
console.log(`Server listen port ${HTTP_PORT}`);