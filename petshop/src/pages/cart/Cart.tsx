import ItemCart from "../../components/itemCart/ItemCart";
import { useCart } from "../../context/Cart";
import { GiShoppingCart } from "react-icons/gi";
const Cart = () => {

  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 max-h-[50%] mt-10">
        <GiShoppingCart size={52} color="#1a7a6e" />
        <h1 className="font-bold text-4xl text-gray-800">Carrinho Vazio</h1>
        <p className="text-gray-500">Adicione produtos para começar suas compras!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-[60%] w-full mx-auto ">
      <div className="flex gap-2 my-4">
        <GiShoppingCart size={25} color="#1a7a6e" />
        <h1> Seu Carrinho</h1>
      </div>
      <h1 className="text-4xl font-medium text-gray-800"> {cart.length} item</h1>
      <hr></hr>

      {cart.map((item) => (
        <ItemCart key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Cart;
