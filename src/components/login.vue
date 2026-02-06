<template>
    <div class="container">
  <h2>Login</h2>
  <input v-model="usuario" type="text" placeholder="Usuario">
   <input v-model="password" type="text" placeholder="Contrasena">
   <button >Entrar</button>
</div>
</template>

<script>
export default {
    data(){
        return{
            usuario:'',
            password:'',
        }
    },
    methods:
    {
        crearToken(){
          
        },

        login(){
            const Token = "";
            if(Token !== null){
                localStorage.setItem("Token", Token);
                localStorage.setItem("estaAutenticado", true);
            }else{
                console.log("error de autenticacion");
            }
        }

    },

}
</script>

<style>
.container {
    width: 400px;
    margin: 100px;
    padding: 20px;
    border: 1px solid grey;
    border-radius: 15px;
    text-align: center;
}
input{
    widows: 100px;
    margin-bottom: 10px;
    padding: 8px;
}
button{
    width: 100px;
    padding: 8px;
    cursor: pointer;
}

</style>