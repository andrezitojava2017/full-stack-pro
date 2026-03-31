import { useCart } from "../../context/Cart";
import { GiShoppingCart } from "react-icons/gi";
const Cart = () => {
    
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 max-h-[50%] mt-10">
        <GiShoppingCart size={52} color="#1a7a6e"/>
        <h1 className="font-bold text-4xl text-gray-800">Carrinho Vazio</h1>
        <p className="text-gray-500">Adicione produtos para começar suas compras!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Meu Carrinho</h1>
    </div>
  );
};

export default Cart;
