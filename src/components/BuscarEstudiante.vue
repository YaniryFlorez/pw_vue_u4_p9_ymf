<template>
  <div class="container_buscar">
    <label for="id_buscar">Ingresar ID:</label>
    <input type="number" id="id_buscar" v-model="idBuscar" />
    <button @click="buscar">Buscar</button>
  </div>
  <div class="datos">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Acción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td><button @click="editar(estudiante)">Editar</button></td>
          <td><button @click="eliminar(estudiante.id)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
    <h3 v-if="registroEliminado">El registro fue eliminado con exito</h3>
  </div>
</template>

<script>
import { mostrarPorIdFachada, borrarFachada } from "@/clients/MatriculaClient";
export default {
  data() {
    return {
      idBuscar: 0,
      estudiantes: [],
      registroEliminado: false,
    };
  },
  methods: {
    async buscar() {
      try {
        const respuesta = await mostrarPorIdFachada(this.idBuscar);
        if (respuesta) {
          this.estudiantes = [respuesta];
        } else {
          this.estudiantes = [];
          console.warn("No se encontró estudiante con ese ID");
        }
      } catch (error) {
        console.error("Error al buscar estudiante:", error);
      }
    },
    editar(estudiante) {
      this.$router.push({
        name: "ActualizarEstudiante",
        params: { id: estudiante.id },
      });
    },

    async eliminar(id) {
      try {
        await borrarFachada(id);
        this.estudiantes = this.estudiantes.filter((est) => est.id !== id);
        this.registroEliminado = true;
        this.idBuscar = 0;
        console.log(`Estudiante con ID ${id} eliminado.`);
      } catch (error) {
        console.error("Error al eliminar estudiante:", error);
      }
    },
  },
};
</script>

<style>
.container_buscar {
  margin-bottom: 20px;
}
.datos {
  margin-top: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
button {
  padding: 6px 12px;
  margin: 2px;
  cursor: pointer;
}
button:hover {
  background-color: #ddd;
}
h3 {
  color: rgb(135, 9, 4);
  text-align: center;
}
</style>