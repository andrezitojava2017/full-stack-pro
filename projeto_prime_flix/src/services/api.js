import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { language: "pt-BR"},
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWZlOTAxYjM0MGQ2YzdhMDE2OWQ1ZTkzMGJhY2IzOCIsIm5iZiI6MTY0MjgxMTcxOS40OTQwMDAyLCJzdWIiOiI2MWViNTE0Nzk3NmU0ODAwNmUzNDg5NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i5tB-a4SrZFR1idbhmrcJXXuJrgqavK6h8anq24P1rc",
  },
});

export default api;
