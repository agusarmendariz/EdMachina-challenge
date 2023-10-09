import { createRouter, createWebHashHistory } from 'vue-router'


import Home from '../views/Home.vue'


const routes = [

  {
    meta: {
      title: 'Dashboard'
    },
    path: '/dashboard',
    name: 'dashboard',
    component: Home
  },
  {
    meta: {
      title: 'Smart Enroller'
    },

    path: '/smartEnroller',
    name: 'smartEnroller',
    component: () => import('../views/SmartEnroller.vue')
  },
  {
    meta: {
      title: 'Dropout Shield'
    },
    path: '/dropoutShield',
    name: 'dropoutShield',
    component: () => import('../views/DropoutShield.vue')
  },
  {
    meta: {
      title: 'Retention Partner'
    },
    path: '/retentionPartner',
    name: 'retentionPartner',
    component: () => import('../views/RetentionPartner.vue')
  },
  {
    meta: {
      title: 'Academic Offer'
    },
    path: '/academicOffer',
    name: 'academicOffer',
    component: () => import('../views/AcademicOffer.vue')
  },
  {
    meta: {
      title: 'My Reports'
    },
    path: '/myReports',
    name: 'myReports',
    component: () => import('../views/MyReports.vue')
  },
  {
    meta: {
      title: 'Custom Reports'
    },
    path: '/customReports',
    name: 'customReports',
    component: () => import('../views/CustomReports.vue')
  },
  {
    meta: {
      title: 'Workflows'
    },
    path: '/workflows',
    name: 'workflows',
    component: () => import('../views/Workflows.vue')
  }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        components: {
          default: Home,
          // short for LeftSidebar: LeftSidebar
          LeftSidebar,
          // they match the `name` attribute on `<router-view>`
          RightSidebar,
        },
      },
    ],
  })
export default router