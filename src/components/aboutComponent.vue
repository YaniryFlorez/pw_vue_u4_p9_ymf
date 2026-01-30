<template>
  <div class="container">
    <h2>About Component</h2>

    <button @click="crear">Crear</button>
    <button @click="actualizar">Actualizar</button>
    <button @click="actualizarParcial">Actualizar Parcial</button>
    <button @click="buscarTodos">Buscar Todos</button>
    <button @click="buscarPorId">Buscar Por ID</button>
    <button @click="borrar">Borrar</button>
  </div>
</template>

<script>
import { 
  guardarFachada, 
  actualizarFachada, 
  actualizarParcialFachada, 
  mostrarTodosFachada, 
  mostrarPorIdFachada, 
  borrarFachada 
} from '../clients/MatriculaClient.js';

export default {
  name: "AboutComponent",
  data() {
    return {
      mensaje: 'Componente About'
    };
  },
  methods: {
    async crear() {
      try {
        const entidad = {
          nombre: 'Juan Perez',
          curso: 'Matematicas'
        };
        const respuesta = await guardarFachada(entidad);
        console.log("Creado:", respuesta);
      } catch (error) {
        console.error("Error al crear:", error);
      }
    },
    async actualizar() {
      try {
        const id = 1;
        const entidad = {
          nombre: 'Juan Perez Actualizado',
          curso: 'Fisica'
        };
        const respuesta = await actualizarFachada(id, entidad);
        console.log("Actualizado:", respuesta);
      } catch (error) {
        console.error("Error al actualizar:", error);
      }
    },
    async actualizarParcial() {
      try {
        const id = 1;
        const entidad = { curso: 'Quimica' };
        const respuesta = await actualizarParcialFachada(id, entidad);
        console.log("Actualización parcial:", respuesta);
      } catch (error) {
        console.error("Error en actualización parcial:", error);
      }
    },
    async buscarTodos() {
      try {
        const respuesta = await mostrarTodosFachada();
        console.log("Todos:", respuesta);
      } catch (error) {
        console.error("Error al buscar todos:", error);
      }
    },
    async buscarPorId() {
      try {
        const id = 1;
        const respuesta = await mostrarPorIdFachada(id);
        console.log("Por ID:", respuesta);
      } catch (error) {
        console.error("Error al buscar por ID:", error);
      }
    },
    async borrar() {
      try {
        const id = 1;
        await borrarFachada(id);
        console.log(`Registro con ID ${id} borrado`);
      } catch (error) {
        console.error("Error al borrar:", error);
      }
    }
  }
};
</script>

<style>
.container {
  margin: 20px;
}
button {
  margin: 5px;
}
</style>