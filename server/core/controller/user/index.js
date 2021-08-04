const { errorMessage, dataSuccess} = require('../../util');
const { query } = require('../../db');
const JWT = require('jsonwebtoken');

const {PUB_KEY} = process.env;

module.exports = () => ({
  /**
   * Get All
   */
  getAll: async(req,res) => {
    try{
      const q = "SELECT user_uuid,user_name,user_email,user_created,user_lastaccess FROM challenge_user ORDER BY user_created";
      const users = await query(q);
      return res.status(200).send(dataSuccess(users.rows));
    }catch(err){
      return res.status(200).send(errorMessage(err.message));
    }
  },

  /**
   * Try to authenticate the user
   */
  auth: async(req,res) => {
    try{
      const body = req.body;
      if(!body.email || !body.password){
        return res.status(200).send(errorMessage('Email or password is empty.'));
      }
      // get user
      const storedUser = await query(`
        SELECT user_uuid,user_name,user_email,user_lastaccess FROM challenge_user
        WHERE user_email = $1 AND user_password = $2
      `, [body.email, body.password]);

      if(storedUser.rowCount <= 0){
        return res.status(200).send(errorMessage('Email or password does not match.'));
      }
      const user = storedUser.rows[0];

      // create token
      const options = {
        expiresIn: '168h',
      };
      const payload = {
        u: user.user_uuid,
        iat: new Date().getTime(),
      }
      const token = JWT.sign(payload, PUB_KEY, options);
      // update last access
      await query('UPDATE challenge_user SET user_lastaccess = now() WHERE user_uuid = $1', [user.user_uuid]);
      
      return res.status(200).send(dataSuccess({
        token: token, 
        user: {
          name: user.user_name,
        }
      }));      
    }catch(err){
      return res.status(200).send(errorMessage(err.message));
    }
  },
})