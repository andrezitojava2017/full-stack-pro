import { Outlet } from "react-router";
import Header from "../header/header";
import Container from "../container/container";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
export default Layout;
