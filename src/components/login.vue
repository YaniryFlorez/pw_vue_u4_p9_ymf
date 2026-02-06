<template>
  <div class="main">
  <div class="container">
    <h2>Login</h2>
    <input v-model="usuario" type="text" placeholder="Usuario" />
    <input v-model="password" type="text" placeholder="Contrasena" />
    <button @click="crearToken()">Entrar</button>
  </div>
  </div>
</template>

<script>
import { crearTokenFachada } from "@/clients/AuthClient";
export default {
  data() {
    return {
      usuario: "",
      password: "",
    };
  },

  methods: {
    async crearToken() {
      const respToken = await crearTokenFachada(this.usuario, this.password);
      console.log("login ", respToken.accessToken);
      if (respToken != null) {
        console.log('loginusu', this.usuario, this.password);
            sessionStorage.setItem("jwt_token", respToken.accessToken);
            sessionStorage.setItem("estaAutenticado", true);
            this.$router.push("/mostrar");
      }
    },
/*
    login() {
      const Token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDM1MTUzMywiZXhwIjoxNzcwNzExNTMzLCJqdGkiOiI5Zjk1ZWE3ZS1lNDZmLTRhZGUtOGUyYS01MjUxYzg2NmVhZDkifQ.XYICEYx-BQJ2PD5Qb4_MsDZVAxzYsEyIyJTS0xVk9XUsxy6-8sbR_M02X1H0ifUnQKL8AtUlXTATghbRR34R2nzuwOAchIIzlnv_4FwxqS24ZduyuIcl4aZ6uk-gwDcJT46X6ix6ug-YnjmKF4PaRT3wHE3w3IvSI4Op-NusdXeUe_0lPm2dtCOEBJTtM7MfcUktdGMLMbJNWJdvGhZi-Lx-uFyL1dIJqgNbAZcoBdkgPTgfcLpp6PN5izbtLPSWM0pfkjFgieJJNZTo95nbPJ-iexFYeUT6q6_bKZVGO7AINoJ75PRAP-gllbt_QmV_UYI9hzz_0ACKfn96j4rJlA";
      if (Token !== null) {
        localStorage.setItem("Token", Token);
        localStorage.setItem("estaAutenticado", true);
      } else {
        console.log("error de autenticacion");
      }
    },*/
  },
};
</script>

<style scoped>
.main {
  display: flex;
  align-content: center;
  justify-content: center;
  
}
.container {
  width: 400px;
  margin: 100px;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 15px;
  text-align: center;
}
input {
  widows: 100px;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  width: 100px;
  padding: 8px;
  cursor: pointer;
}
</style>