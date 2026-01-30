import { createRouter, createWebHistory } from 'vue-router'
import CrearEstudiante from '@/components/CrearEstudiante.vue'
import MostrarTodos from '@/components/MostrarTodos.vue'
import BuscarEstudiante from '@/components/BuscarEstudiante.vue'
import aboutComponent from '@/components/aboutComponent.vue'
import ActualizarEstudiante from '@/components/ActualizarEstudiante.vue'

const routes = [
  {
    path: '/crear',
    name: 'crear',
    component: CrearEstudiante
  },
  {
    path: '/mostrar',
    name: 'mostrar',
    component: () => MostrarTodos
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: BuscarEstudiante
  },
  {
    path: '/componente',
    name: 'componente',
    component: aboutComponent
  },

  {
    path: '/actualizar/estudiante/:id',
    name: 'ActualizarEstudiante',
    component: () => ActualizarEstudiante
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
