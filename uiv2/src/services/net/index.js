/**
 * Network utils 
 * @author: Aderbal Nunes <aderbalnunes@gmail.com>
 * @since: 17/02/2020
 */
const {NODE_ENV} = process.env;

const API_URL = NODE_ENV==='production'?"":"http://localhost:3000/api";
 
/**
* Mount headers
*/
export const headers = () => {
  const h = {"Content-Type": "application/json", "Accept": "application/json"};
  if(localStorage.getItem('token') !== null){
    h.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return h;
};
 
/**
* Handler erros
* @param {Response} response 
*/
export const handlerFetch = response => { 
  if(!response.ok) throw Error(response.statusText)
  return response.json();
}
 
/**
* Performs get
* @param {string} endpoint 
*/
export const get = endpoint => new Promise((resolve, reject) => {
  fetch(
    `${API_URL}${endpoint}`, {
      method: 'get',
      headers: headers(),
    }
  )
  .then(res => resolve( handlerFetch(res) ))
  .catch(err => reject(err)) 
})
 
 /**
  * Performs post
  * @param {string} endpoint 
  * @param {object} param1 
  */
export const post = (endpoint, {body}) => new Promise((resolve, reject) => {
  fetch(
    `${API_URL}${endpoint}`, {
      method: 'post',
      headers: headers(),
      body: (body)?JSON.stringify(body):null,
    }
  )
  .then(res => resolve( handlerFetch(res) ))
  .catch(err => reject(err)) 
})  
 
/**
* Performs put
* @param {string} endpoint 
* @param {object} param1 
*/
export const put = (endpoint, {body}) => new Promise((resolve, reject) => {
  fetch(
    `${API_URL}${endpoint}`, {
      method: 'put',
      headers: headers(),
      body: (body)?JSON.stringify(body):null,
    }
  )
  .then(res => resolve( handlerFetch(res) ))
  .catch(err => reject(err))        
})     
 
/**
* Performs delete
* @param {string} endpoint 
*/
export const del = (endpoint) => new Promise((resolve, reject) => {
  fetch(
    `${API_URL}${endpoint}`, {
      method: 'delete',
      headers: headers(),
    }
  )
  .then(res => resolve( handlerFetch(res) ))
  .catch(err => reject(err)) 
})  
 
/**
* Performs upload
* @param {string} endpoint 
* @param {File} file 
*/
export const upload = (endpoint, file) => new Promise((resolve, reject) => {
  const hd = headers();
  delete hd['Content-Type'];      
  fetch(
    `${API_URL}${endpoint}`, {
      method: 'post',
      headers: hd,
      body: file,
    }
  )
  .then(res => resolve( handlerFetch(res) ))
  .catch(err => reject(err)) 
})