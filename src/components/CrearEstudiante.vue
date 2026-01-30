<template>
  <div>
    <h3>Ingresar Estudiante</h3>
    <form>
      <div class="datos">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" />
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido" />
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" />
        <label for="provincia">provincia</label>
        <input type="text" id="provincia" v-model="provincia" />
        <label for="genero">Genero</label>
        <input type="text" id="genero" v-model="genero" />
        <button type="submit" @click.prevent="guardarEstudiante">Guardar</button>
         </div> 
         <h3 v-if="estudianteGuardado">Estudiante {{ nombre }} Guardado con exito</h3>
        </form>
  </div>

</template>

<script>
import { guardarFachada } from '@/clients/MatriculaClient';
export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      provincia: '',
      genero: '',
      estudianteGuardado: false
    }
  },
  methods: {
    async guardarEstudiante() {
  try {
    await guardarFachada({
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      provincia: this.provincia,
      genero: this.genero,
    });
    this.estudianteGuardado = true;
  } catch (error) {
    console.error("Error al guardar estudiante:", error);
  }
},
    limpiarFormulario() {
      this.nombre = '';
      this.apellido = '';
      this.fechaNacimiento = '';
      this.provincia = '';
      this.genero = '';
    },
  }
};
</script>

<style>
.datos {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}
.datos label {
  text-align: left;
  margin-top: 10px;
}

.datos input {
  padding: 8px;
  font-size: 16px;
}
button {
  margin-top: 20px;
  padding: 10px;
  font-size: 17px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
.datos button:hover {
  background-color: #369870;
}

</style>