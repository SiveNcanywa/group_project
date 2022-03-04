import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import addProduct from '../views/addProduct.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
   
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path:'/addProduct',
    name:'addProduct',
    component: () => import("../views/addProduct")
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   const publicPages = ['/Login', '/Register', '/Home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//   if (to.path == '/Products' || to.path =='/Cart' && !loggedIn) next({name:'Products'})
//   else next()
// });

export default router
