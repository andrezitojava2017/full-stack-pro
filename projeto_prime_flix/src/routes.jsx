import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Film from "./pages/film";
import Header from "./components/header/header";
import Erro from "./pages/erro/erro";
import FilmsFavorito from "./pages/favorite/favorite";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Film />} />
        <Route path="/favoritos" element={<FilmsFavorito />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
