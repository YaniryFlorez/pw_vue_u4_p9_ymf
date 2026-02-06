<template>
  <nav v-if="!$route.meta.hideNavbar">
    <router-link to="/crear">Crear</router-link> |
    <router-link to="/mostrar">Mostrar</router-link> |
    <router-link to="/buscar">Buscar</router-link> |
    <router-link to="/componente">componente</router-link>
  </nav>
  <router-view />
</template>
<script> 
export default {
  name: 'App',
  components: {
  
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
