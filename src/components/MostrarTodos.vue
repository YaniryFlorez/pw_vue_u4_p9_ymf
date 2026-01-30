<template>
  <div class="container">
    <h2>Mostrar Todos los Estudiantes</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Género</th>
          <th>Provincia</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.fechaNacimiento }}</td>
          <td>{{ estudiante.genero }}</td>
          <td>{{ estudiante.provincia }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mostrarTodosFachada } from "@/clients/MatriculaClient";
export default {
  data() {
    return {
      estudiantes: []
    };
  },
  mounted() {
    this.buscarTodos();
  },
  methods: {
    async buscarTodos() {
      try {
        const respuesta = await mostrarTodosFachada();
        console.log("Todos:", respuesta);
        this.estudiantes = respuesta;
      } catch (error) {
        console.error("Error al buscar todos:", error);
      }
    },
  },
};
</script>

<style>
.container {
  padding: 20px;
  align-content: center;
}
table {
  width: 100%;
  border-collapse: collapse;
} 
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}

</style>