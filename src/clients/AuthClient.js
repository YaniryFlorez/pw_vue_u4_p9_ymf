import axios from "axios";

// Devuelve el token como string. Ajusta la URL/credenciales si hace falta.
const crearToken = async () => {
  const url = `http://localhost:8082/matricula/api/v1.0/auth/token?useur=admin&password=123`;
  const resp = await axios.get(url).then(r => r.data);
  console.log("token auth ",resp);
  return resp;
};
//fachada 
export const crearTokenFachada = async() =>{
  return await crearToken();
}




