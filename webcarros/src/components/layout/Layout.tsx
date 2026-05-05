
import Header from "../header/header";
import Container from "../container/container";
import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const Layout = () => {

  const { signed } = useAuth();
  // Se autenticado, renderiza a rota filha; senão, redireciona para login

  return (
    <div>
      <Header />
      <Container>
        {signed ? <Outlet /> : <Navigate to="/login" />}
      </Container>
    </div>
  );
};
export default Layout;
