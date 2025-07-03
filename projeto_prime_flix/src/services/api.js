import axios from "axios";

const KEY = import.meta.env.VITE_API_TOKEN;
const URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { language: "pt-BR"},
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${KEY}`,
  },
});

export default api;
