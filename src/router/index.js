import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AnimalsView from '../views/AnimalsView.vue'
import CreateView from '../views/CreateView.vue'
import AboutView from '../views/AboutView.vue'
import AuthView from '../views/AuthView.vue'
import ProfileView from '../views/ProfileView.vue'
import AnimalDetail from '../views/AnimalDetail.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/animal',
    name: 'animal',
    component: AnimalsView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/animal/:id',
    name: 'animal-detail',
    component: AnimalDetail
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

