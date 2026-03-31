import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../../context/Cart";
import { useNavigate } from "react-router";

const Header = () => {
  const navigator = useNavigate();
  const { cart } = useCart();

  return (
    <header className="flex w-full items-center justify-center bg-gray-700 text-white h-28">
      <div className="flex  justify-between max-w-[80%] w-full ">
        <div className="hover:cursor-pointer" onClick={() => navigator("/")}>
          <h1 className="font-bold font-900 text-2xl ">PetShop</h1>
          <span className="font-500 text-xs tracking-widest text-yellow-500">
            PREMIUM STORE
          </span>
        </div>

        <div
          className="flex gap-2  items-center border-white border rounded-xl px-8 py-2 hover:cursor-pointer"
          onClick={() => navigator("/cart")}
        >
          <div className="relative">
            <FaCartShopping size={18} color="white" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                {cart.length}
              </span>
            )}
          </div>
          <span>Carrinho</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
