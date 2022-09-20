import axios from "axios";

// "http://localhost:3030" 

const api = axios.create({
    baseURL: "https://optimus-backend-web.herokuapp.com",
});

export default api;