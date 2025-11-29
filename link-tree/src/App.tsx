import { Route, Routes } from "react-router";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Networks from "./pages/networks/networks";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/networks" element={<Networks />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
