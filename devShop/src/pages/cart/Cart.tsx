import { useContext } from "react";
import { CartContext } from "../../context/context";
import { Link } from "react-router";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="w-full max-w-5xl px-4 mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>

      {cart.length === 0 && (
        <div className="flex flex-col gap-3 justify-center items-center">
          <p>Carinho está varzio</p>
          <Link to={"/"}>
            <span className="bg-blue-400 p-2 font-bold">Ver produtos</span>
          </Link>
        </div>
      )}

      {cart.map((item) => {
        return (
          <section className="flex items-center justify-between border-b-2 border-gray-200">
            <img className="w-28" src={item.cover} alt={item.title} />

            <strong>Preço: {item.price.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</strong>

            <div className="flex">
              <button className="flex items-center bg-slate-600 rounded-md font-bold text-white px-2">
                -
              </button>
              <span className="mx-2"> {item.amount} </span>
              <button className="flex items-center bg-slate-600 rounded-md font-bold text-white px-2">
                +
              </button>
            </div>

            <strong>Subtotal: {item.total.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}</strong>
          </section>
        );
      })}

      <p className="font-bold mt-4">Total: R$1.000</p>
    </div>
  );
};
export default Cart;
