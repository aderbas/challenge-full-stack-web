/**
 * Helper functions for the login view.
 */
import md5 from 'crypto-js/md5';
import { post } from '../../services/net'
import { ApiRoutes } from '../../constants/'

/**
 * Authenticate the user.
 */
export const tryAuthenticate = (credentials) => new window.Promise((resolve,reject) => {
  post(ApiRoutes.login, {body: {
    email: credentials.email, password: md5(credentials.password).toString()
  }})
    .then(result => resolve(result))
    .catch(err => reject(err))
})