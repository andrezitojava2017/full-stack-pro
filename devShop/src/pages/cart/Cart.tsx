const Cart = () => {
  return (
    <div className="w-full max-w-5xl px-4 mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>

      <section className="flex items-center justify-between border-b-2 border-gray-200">
        <img
        className="w-28"
          src="https://http2.mlstatic.com/D_617500-MLA94699392298_102025-C.jpg"
          alt="Logo produto"
        />

        <strong>Preço: R$1.000</strong>

        <div className="flex">
            <button className="flex items-center bg-slate-600 rounded-md font-bold text-white px-2">
                -
            </button>
            <span className="mx-2">1</span>
            <button className="flex items-center bg-slate-600 rounded-md font-bold text-white px-2">
                +
            </button>
        </div>

        <strong >Subtotal: R$1.000</strong>
      </section>

      <p className="font-bold mt-4">Total: R$1.000</p>
    </div>
  );
};
export default Cart;
