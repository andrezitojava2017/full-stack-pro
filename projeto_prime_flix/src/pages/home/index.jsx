import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router";
import "./home.css";

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilmes = async () => {
      const response = await api.get("movie/now_playing", {
        params: { page: 2 },
      });
      console.log(response.data.results);
      setFilmes(response.data.results.slice(0, 10));
    };

    loadFilmes();
    if (filmes) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando lista...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((film) => {
          return (
            <article key={film.id}>
              <strong>{film.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                alt={film.title}
              />
              <Link to={`/filme/${film.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
