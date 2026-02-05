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
    component: CrearEstudiante,
    meta: {
      requiereautorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/mostrar',
    name: 'mostrar',
    component: () => MostrarTodos,
     meta: {
      requiereautorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: BuscarEstudiante,
     meta: {
      requiereautorizacion: false,
      esPublica: true
    }
  },
  {
    path: '/componente',
    name: 'componente',
    component: aboutComponent
  },

  {
    path: '/actualizar/estudiante',
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
//configuracion del guardian
router.beforeEach((to, from, next) => {
  if(to.meta.requiereautorizacion){
    //le envio a una pag de login
    console.log("Redirigiendo a login");
  }else{
    //pasa sin validacion
    console.log("Pase libre");
    next();
  }
} )

export default router
