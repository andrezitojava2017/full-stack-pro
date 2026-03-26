import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Layout from "../components/layout/Layout";
import ProductDetails from "../pages/product/Product";

const RoutesShop = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default RoutesShop;
