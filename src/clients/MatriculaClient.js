import axios from "axios";
import {crearTokenFachada} from "@/clients/AuthClient";

const getAuthHeaders = async () => {
    const token = await crearTokenFachada();

    console.log("token llego " ,token.accessToken);
    return { headers: { Authorization: `Bearer ${token.accessToken}` } };
};

// CRUD
const consultarTodos = async () => {
    
    const headers = await getAuthHeaders();
    const res = await axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes', headers).then(r => r.data);
    return res;
};

const consultarPorId = async (id) => {
    const headers = await getAuthHeaders();
    const res = await axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, headers).then(r => r.data);
    return res;
};

const guardar = async (body) => {
    const headers = await getAuthHeaders();
    const res = await axios.post("http://localhost:8081/matricula/api/v1.0/estudiantes", body, headers).then(r => r.data);
    return res;
};

const actualizar = async (id, body) => {
    const headers = await getAuthHeaders();
    const res = await axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body, headers).then(r => r.data);
    return res;
};

const actualizarParcial = async (id, body) => {
    const headers = await getAuthHeaders();
    const res = await axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body, headers).then(r => r.data);
    return res;
};

const borrar = async (id) => {
    const headers = await getAuthHeaders();
    await axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, headers).then(r => r.data);

};

// Fachadas
export const mostrarTodosFachada = async () => {
    return await consultarTodos();
};

export const mostrarPorIdFachada = async (id) => {
    return await consultarPorId(id);
};

export const guardarFachada = async (body) => {
    return await guardar(body);
};

export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body);
};

export const actualizarParcialFachada = async (id, body) => {
    return await actualizarParcial(id, body);
};

export const borrarFachada = async (id) => {
    await borrar(id);
};