import { Link } from 'react-router';
import './erro.css'

const Erro = () => {
  return (
    <div className="not-found">
     
      <h1>404</h1>
      <h2>Pagina não encontrada 🫤</h2>
      <Link to={'/'}>Ver todos filmes</Link>
    </div>
  );
};

export default Erro;
