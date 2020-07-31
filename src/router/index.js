import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/change-todo',
    name: 'change-todo',
    component: () => import('@/views/List.vue')
  },
  {
    path: '/create/:id',
    name: 'create',
    component: () => import('@/views/CreateTask.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
