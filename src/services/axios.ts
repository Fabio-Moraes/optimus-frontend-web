import axios from "axios";

const api = axios.create({
// baseURL: "http://localhost:3030",
baseURL: "https://optimus-backend-web.herokuapp.com",
});

export default api;