import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center text-white ">
      <h1 className="font-bold text-4xl">4 0 4</h1>
      <h1 className="text-3xl">Pagina não encontrada</h1>

      <Link to={"/"} className="bg-blue-500 py-2 px-2 mt-4 rounded-md">
        <span>Voltar para Principal</span>
      </Link>
    </div>
  );
};

export default NotFound;
