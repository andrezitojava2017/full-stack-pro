import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";

const RoutesShop = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}

export default RoutesShop;