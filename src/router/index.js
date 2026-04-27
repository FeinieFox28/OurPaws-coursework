import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AnimalsView from '../views/AnimalsView.vue'
import CreateView from '../views/CreateView.vue'
import AboutView from '../views/AboutView.vue'
import AuthView from '../views/AuthView.vue'
import ProfileView from '../views/ProfileView.vue'
import AnimalDetail from '../views/AnimalDetail.vue'
import { auth, db } from '../firebase'
import { doc, getDoc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"

const routes = [
  { path: '/', 
    name: 'home', 
    component: HomeView 
  },
  { path: '/animal', 
    name: 'animal', 
    component: AnimalsView 
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
    meta: { requiresAdmin: true }
  },
  { path: '/about', 
    name: 'about', 
    component: AboutView 
  },
  { path: '/auth', 
    name: 'auth', 
    component: AuthView 
  },
  { path: '/profile', 
    name: 'profile', 
    component: ProfileView 
  },
  { path: '/animal/:id', 
    name: 'animal-detail', 
    component: AnimalDetail 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}


router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser()

  if (to.meta.requiresAdmin) {
    if (!user) {
      return next('/auth')
    }

    try {
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists() && docSnap.data().role === 'admin') {
        next()
      } else {
        next('/')
      }

    } catch (e) {
      console.error(e)
      next('/')
    }

  } else {
    next()
  }
})

export default router