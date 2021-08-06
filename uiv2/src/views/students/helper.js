/**
 * Helper functions for the Studens view
 */

import { get } from '../../services/net'
import { ApiRoutes } from '../../constants/'

/**
 * Get Students
 */
 export const getStudents = () => new window.Promise((resolve, reject) => {
  get(ApiRoutes.student)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

/**
 * Get Student by key
 */
export const getStudent = uuid => new window.Promise((resolve, reject) => {
  if(uuid){
    get(`${ApiRoutes.student}/${uuid}`)
      .then(res => resolve(res))
      .catch(err => reject(err))
  }
  resolve(undefined)
})