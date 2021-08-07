/**
 * Helper functions for the Studens view
 */

import { get,put,post,del } from '../../services/net'
import { ApiRoutes } from '../../constants/'

export const studentRoute = '/app/students';

/**
 * Get Students
 */
 export const getStudents = () => new window.Promise((resolve, reject) => {
  get(ApiRoutes.student.main)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

/**
 * Get Student by key
 */
export const getStudent = uuid => new window.Promise((resolve, reject) => {
  if(uuid){
    get(`${ApiRoutes.student.main}/${uuid}`)
      .then(res => resolve(res))
      .catch(err => reject(err))
  }
})

/**
 * Try save student
 */
export const trySave = student => new window.Promise((resolve, reject) => {
 let method = post;
 if(student.student_uuid) method = put;
 method(ApiRoutes.student.main, {body: student})
   .then(res => resolve(res))
   .catch(err => reject(err))
})

/**
 * Form onCreated handler
 */
export const formCreated = instance => {
  instance.uuid = instance.$route.params?.uuid
  instance.disable = (typeof instance.uuid !== 'undefined')
  getStudent(instance.$route.params?.uuid)
    .then(res => {
      if(res.data && res.data.length > 0){
        instance.student = res.data[0]
      }
    })
    .catch(err => console.log(err))
}

/**
 * Student main component onCreated handler
 */
export const mainCreated = instance => {
  getStudents()
    .then(res => instance.datasource = res.data)
    .catch(() => instance.datasource = [])
}

/**
 * Performs search
 * @param String query
 * @returns Promise
 */
export const searchStudent = query => new window.Promise((resolve,reject) => {
  post(ApiRoutes.student.search, {body: {term: query}})
    .then(res => resolve(res))
    .catch(err => reject(err))
})

/**
 * Try remove
 * @param String uuid
 * @returns Promise
 */
export const tryDelete = uuid => new window.Promise((resolve,reject) => {
  del(`${ApiRoutes.student.main}/${uuid}`)
    .then(res => resolve(res))
    .catch(err => reject(err))
})