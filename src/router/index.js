import { createRouter, createWebHistory } from 'vue-router'
import CrearEstudiante from '@/components/CrearEstudiante.vue'
import MostrarTodos from '@/components/MostrarTodos.vue'
import BuscarEstudiante from '@/components/BuscarEstudiante.vue'
import aboutComponent from '@/components/aboutComponent.vue'
import ActualizarEstudiante from '@/components/ActualizarEstudiante.vue'
import loginView from '@/views/loginView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
   {path: '/',    
     redirect: '/login' 
    } ,
  {
    path: '/login',
    name: 'login',
    component: loginView,
    meta:{
      hideNavbar: true,
    }
  },
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
      requiereautorizacion: true,
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
    const estaAutenticado = sessionStorage.getItem("estaAutenticado");

    if(!estaAutenticado )
    {
    console.log("Redirigiendo a login");
    next({name: 'login'})
    }else{
      next();
    }
    
  }else{
    //pasa sin validacion
    console.log("Pase libre");
    next();
  }
} )

export default router
