import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store.js";
const routes = [

  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/lee',
    name: 'lee',
    props: true,
  component: () => import(/* webpackChunkName: "destinations" */ '../views/lee'),
  },
  {
    path: '/destination/:slug',
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "destinations" */ '../views/DestinationDetails'),
    children : [
      {
        path: ":experienceSlug",
        name: 'experience',
        props: true,
        component: () => import('../views/ExperienceDetails'),
      }
    ],
    beforeEnter:(to,from,next)=>{
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      );
      if(exists){
        next()
      } else{
        next({name: '404'})
      }
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: '404',
    props: true,
    component: () => import('../views/404'),
  }
 
];


const router = createRouter({
  linkExactActiveClass : "active",
  history: createWebHistory(),
  routes
})

export default router
