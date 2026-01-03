import { Route, Routes } from "react-router";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Networks from "./pages/networks/networks";
import Admin from "./pages/admin/admin";
import PrivateRoutes from "./routes/PrivateRoutes";
import NotFound from "./pages/error/error";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/networks"
        element={
          <PrivateRoutes>
            <Networks />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        }
      />
      <Route
        path="*"
        element={<NotFound/>}
      />
    </Routes>
  );
}

export default App;
