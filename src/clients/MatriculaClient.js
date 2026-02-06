import axios from "axios";
import { crearTokenFachada } from "@/clients/AuthClient";
import router from "@/router"

const BASE_URL = 'http://localhost:8081/matricula/api/v1.0/estudiantes';

const getAuthConfig = () => {
    const token = sessionStorage.getItem('jwt_token');
    // Si NO hay token...
    if (!token) {
        // 2. Redirigimos al usuario al Login
        router.push({ name: 'login' });
        // 3. Detenemos todo lanzando un error.
        // Esto evita que axios intente hacer la petición sin token.
        throw new Error("Usuario no autenticado. Redirigiendo...");
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

// 2. Manejador central de errores (especialmente para Token Vencido - 401)
const manejarError = (error) => {
    if (error.response && error.response.status === 401) {
        console.warn("Sesión expirada (401). Redirigiendo...");
        localStorage.removeItem('jwt_token'); // Limpiamos basura
        router.push({ name: 'login' });
    }
    // Relanzamos el error para que el componente Vue pueda mostrar alertas si es necesario
    throw error;
};
// --- MÉTODOS CRUD (Lógica pura) ---

const consultarTodos = async () => {
    try {
        const config = getAuthConfig();
        const response = await axios.get(BASE_URL, config);
        return response.data;
    } catch (error) {
        manejarError(error);
    }
};

const consultarPorId = async (id) => {

    try {

        const config = getAuthConfig();

        const response = await axios.get(`${BASE_URL}/${id}`, config);

        return response.data;

    } catch (error) {

        manejarError(error);

    }

};

const guardar = async (body) => {

    try {

        const config = getAuthConfig();

        // POST: URL, Body, Config

        const response = await axios.post(BASE_URL, body, config);

        return response.data;

    } catch (error) {

        manejarError(error);

    }

};

const actualizar = async (id, body) => {

    try {

        const config = getAuthConfig();

        // PUT: URL, Body, Config

        const response = await axios.put(`${BASE_URL}/${id}`, body, config);

        return response.data;

    } catch (error) {

        manejarError(error);

    }

};

const actualizarParcial = async (id, body) => {

    try {

        const config = getAuthConfig();

        // PATCH: URL, Body, Config

        const response = await axios.patch(`${BASE_URL}/${id}`, body, config);

        return response.data;

    } catch (error) {

        manejarError(error);

    }

};

const borrar = async (id) => {

    try {

        const config = getAuthConfig();

        // DELETE: URL, Config

        const response = await axios.delete(`${BASE_URL}/${id}`, config);

        return response.data;

    } catch (error) {

        manejarError(error);

    }

};

// --- FACHADAS (Para exportar a los componentes Vue) ---

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

    return await borrar(id);

};

