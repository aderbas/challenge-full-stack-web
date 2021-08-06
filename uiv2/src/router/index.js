import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login/Login.vue'
import Home from '../views/home/Home.vue'
import Students from '../views/students/Students.vue'
import Form from '../views/students/Form.vue'

Vue.use(VueRouter)

const routStudents = [
  {
    path: 'students',
    component: Students
  }, {
    path: 'students/edit',
    component: Form,
  }, {
    path: 'students/edit/:uuid',
    component: Form,
  }
]

const routes = [
  {
    path: '/app',
    name: 'Home',
    component: Home,
    children: [
      ...routStudents,
    ]
  },   
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

export default new VueRouter({
    routes
})