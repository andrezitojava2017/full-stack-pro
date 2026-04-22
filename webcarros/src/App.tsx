import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./page/home/Home";
import Register from "./page/register/Register";
import Detail from "./page/car/Detail";
import Dashboard from "./page/dashboard/Dashboard";
import NewCar from "./page/dashboard/new/NewCar";
import Login from "./page/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="car/:id" element={<Detail />} />
          <Route path="/dashboard/new" element={<NewCar />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
