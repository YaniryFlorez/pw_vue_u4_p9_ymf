// Auth
import axios from "axios";


// Devuelve el token como string. Ajusta la URL/credenciales si hace falta.
const crearToken = async (useur, password) => {
  const url = `http://localhost:8082/matricula/api/v1.0/auth/token?useur=${useur}&password=${password}`;
  const resp = await axios.get(url).then(r => r.data);
  console.log("token auth ",resp);
  return resp;
};

//fachada 
export const crearTokenFachada = async(useur,password) =>{
  return await crearToken(useur,password);
}






