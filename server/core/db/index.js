/**
 * 
 */
const { Pool } = require('pg');
 
/**
* Create a pool
*/
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})
  
/**
* Execute any query
* @param {string} q 
* @param {any[]} params 
*/
const query = async(q, params=null) => {
  const client = await pool.connect();
  try{
    return client.query(q, params);
  }catch(err){
    throw err;
  }finally{
    client.release();
  }
};
 
module.exports = { query, pool }