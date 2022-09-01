import axios from "axios";

const api = axios.create({
    baseURL: "https://optimus-backend-web.herokuapp.com",
    // baseURL: "http://localhost:3030",
});

export default api;