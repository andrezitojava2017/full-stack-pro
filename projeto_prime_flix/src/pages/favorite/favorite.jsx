import { useEffect, useState } from "react";
import "./favorito.css";
import { Link } from "react-router";
import { toast } from "react-toastify";

const FilmsFavorito = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  const excluirFilme = (id) => {

    let rs = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(rs)
    localStorage.setItem("@primeflix", JSON.stringify(rs))
    toast.warn("Filme exluido com sucesso!",{
        position:'top-right',
    })
  };

  return (
    <div className="meus-filmes">
      <h1>Meus favoritos</h1>
      {filmes.length === 0 && <span id="message">Nenhum filme em sua lista! 🫤</span>}
      <ul>
        {filmes.map((film) => {
          return (
            <li key={film.id}>
              <span>{film.title}</span>
              <div>
                <Link to={`/filme/${film.id}`}>Detalhes</Link>
                <button onClick={() => excluirFilme(film.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilmsFavorito;
