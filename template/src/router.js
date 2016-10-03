import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (name) {
  if (process.env.NODE_ENV === 'development') {
    return require('components/' + name + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + name + '.vue')(resolve)
    }
  }
}


const routes = [
  { path: '*', component: load('error404') }, // Not found
  { path: '/', component: load('index') } // Default
]

const router = new VueRouter({
  routes
})


export default router
