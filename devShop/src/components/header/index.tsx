import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import { CartContext } from "../../context/context";

const Header = () => {
  const {cartAmount} = useContext(CartContext);

  return (
    <header className="bg-slate-200 w-full ">
      <nav className="flex items-center justify-between w-full max-w-5xl h-14 px-5 mx-auto">
        <Link to={"/"} className="font-bold text-2xl">
          DEV SHOP
        </Link>
        <Link to={"/cart"} className="relative">
          <FiShoppingCart size={28} color="#121212" />

          {cartAmount != 0 && (
            <span className="absolute -right-4 -top-2 bg-blue-400 px-2.5 w-5 h-5- rounded-full flex items-center justify-center text-xs text-white">
             {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
