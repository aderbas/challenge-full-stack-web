/**
 * Server App Express main file. 
 * Create express app and load routes.
 * @author Aderbal Nunes <aderbalnunes@gmail.com>
 */

/**
 * imports
 */
const express     = require('express');
const expressJWT  = require('express-jwt');
const compression = require('compression');
const fs          = require('fs');
const helmet      = require('helmet');
const dotenv      = require('dotenv');
const cors        = require('cors');
const { handlerRequestErros } = require('./core/middleware');

dotenv.config();
const {API_PATH,PUB_KEY,APP_VERSION} = process.env;

/**
* Public routes
*/
const UNLESS_ROUTE = {
  path: [
    API_PATH, 
    `${API_PATH}/user/auth`, 
    `${API_PATH}/version`,
  ]
};

/**
 * App
 */
const app = express();

//Compress all routes
app.use(compression());

// Protect
app.use(helmet({
  contentSecurityPolicy: false,
}));

/**
 * Protect /api routes with JWT
 */
app.use(API_PATH, expressJWT({secret: PUB_KEY}).unless( UNLESS_ROUTE ));

/**
 * Allow Origin
 */
app.use(cors());


/**
 * Handler error
 */
app.use(handlerRequestErros);

/**
 * Body parser
 */
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }))

/**
 * Version route
 */
app.get([`${API_PATH}/version`, API_PATH], (req,res) => {
  res.json({version: APP_VERSION});
});

/**
 * API Routes
 */
fs.readdirSync(`${__dirname}/core/routes`).forEach(file => {
  if(file !== "" && file.search(/^_/) < 0){
    file = file.replace(/.js/g, '');
    app.use(`${API_PATH}/${file}`, require(`./core/routes/${file}`)(express));
  }
});

module.exports = { app };