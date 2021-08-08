import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login/Login.vue'
import Home from '../views/home/Home.vue'
import Students from '../views/students/Students.vue'
import Form from '../views/students/Form.vue'
import Welcome from '../views/start/Welcome.vue'

Vue.use(VueRouter)

const isAuthenticated = () => (localStorage.getItem('token') !== null)

const routeStudents = [
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

const routeWelcome = {
  path: '',
  component: Welcome  
}

const routes = [
  {
    path: '/app',
    name: 'Home',
    component: Home,
    children: [
      routeWelcome,
      ...routeStudents,
    ]
  },   
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const route = new VueRouter({
  routes
})

route.beforeEach((to, from, next) => {
  if(to.fullPath.search(/^\/app/g) >= 0 && !isAuthenticated()){
    next('/')
  }
  if(to.fullPath === '/' && isAuthenticated()){
    next('/app')
  }
  next()
})

export default route