/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../../services/api";
import "./film.css";
import { toast } from "react-toastify";

const Film = () => {
  const URL_IMAGE = import.meta.env.VITE_API_PATH_IMAGE;
  const navigate = useNavigate();
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoadiing] = useState(true);

  useEffect(() => {
    const loadFilme = async () => {
      api
        .get(`movie/${id}`)
        .then((rs) => {
          console.log(rs.data);
          setFilme(rs.data);
          setLoadiing(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    };

    loadFilme();

    return () => {
      console.log("componente Detalhes do filme desmontado!");
    };
  }, []);

  const salvarFilme = () => {
    const minhaLista = localStorage.getItem("@primeflix");
    const filmesSalvaos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvaos.some((filme) => filme.id === id);
    if(hasFilme !== true){
      filmesSalvaos.push(filme)
      localStorage.setItem("@primeflix",JSON.stringify(filmesSalvaos))
     
    }
     toast.info('Filme adicionado aos favoritos',{
        position:'top-right',
        autoClose: 3000,
        closeOnClick: true,
      })
  };

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando filme...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`${URL_IMAGE}${filme.backdrop_path}`} alt={filme.title} />
      <h3>SINOPSE</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average}/10</strong>

      <div className="aria-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${filme.title} trailer`}
            target="blank"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default Film;
