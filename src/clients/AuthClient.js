import axios from "axios";

// Devuelve el token como string. Ajusta la URL/credenciales si hace falta.
const crearToken = async () => {
  const url = `http://localhost:8082/matricula/api/v1.0/auth/token?useur=admin&password=123`;
  const resp = await axios.get(url).then(r => r.data);
  // Resp puede ser string o un objeto; normalizamos a string cuando sea posible
  if (!resp) return null;
  if (typeof resp === "string") return resp;
  if (resp.token) return resp.token;
  if (resp.access_token) return resp.access_token;
  // si viene un objeto con otras propiedades, intentar obtener el primer valor string
  const vals = Object.values(resp).filter(v => typeof v === "string");
  return vals.length ? vals[0] : JSON.stringify(resp);
};

export default crearToken;


