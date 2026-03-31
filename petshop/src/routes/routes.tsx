
import { Route, Routes } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";

const RoutePetShop = () => {
   return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default RoutePetShop;