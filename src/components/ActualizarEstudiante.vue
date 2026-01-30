<template>
  <div class="container">
    <h2>Actualizar Estudiante</h2>
    <form>
      <div class="datos">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" />

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido" />

        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" />

        <label for="provincia">Provincia:</label>
        <input type="text" id="provincia" v-model="provincia" />

        <label for="genero">Género:</label>
        <input type="text" id="genero" v-model="genero" />

        <button type="submit" @click.prevent="guardarEstudiante">
          Actualizar
        </button>
      </div>
      <h3 v-if="estudianteActualizado">
        El registro No:{{ registroId}} se actualizado con éxito
      </h3>
    </form>
  </div>
</template>

<script>
import { actualizarFachada, mostrarPorIdFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      estudiante: null,
      registroId: null,
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      provincia: "",
      genero: "",
      estudianteActualizado: false,
    };
  },

  async mounted() {
    const id = this.$route.params.id;   // ← se obtiene el id de la ruta
    try {
      const respuesta = await mostrarPorIdFachada(id);
      this.estudiante = respuesta;
      this.registroId = respuesta.id;
      this.nombre = respuesta.nombre;
      this.apellido = respuesta.apellido;
      this.fechaNacimiento = respuesta.fechaNacimiento;
      this.provincia = respuesta.provincia;
      this.genero = respuesta.genero;
    } catch (error) {
      console.error("Error al cargar estudiante:", error);
    }
  },

  methods: {
    async guardarEstudiante() {
      try {
        await actualizarFachada(this.estudiante.id, {
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fechaNacimiento,
          provincia: this.provincia,
          genero: this.genero,
        });
        this.estudianteActualizado = true;
      } catch (error) {
        console.error("Error al actualizar estudiante:", error);
      }
    },
  },
};
</script>