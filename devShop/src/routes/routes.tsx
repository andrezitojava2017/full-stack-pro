import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Layout from "../components/layout/Layout";

const RoutesShop = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default RoutesShop;
