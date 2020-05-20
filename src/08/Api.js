import axios from "axios";

const Api = axios.create({
    baseURL: "Http://localhost:4000/"
});

export default Api;