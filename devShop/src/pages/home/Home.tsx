import { BsCartPlus } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <main className="w-full max-w-5xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full">
            <img
              src="https://http2.mlstatic.com/D_617500-MLA94699392298_102025-C.jpg"
              className="rounded-lg max-h-70 mb-2"
            />
            <p className="font-bold mt-1 mb-2">Iphone 17 Pro Max</p>

            <div className="flex gap-3 items-center">
              <strong className="text-zinc-70">R$ 8.000</strong>
              <button className="bg-zinc-900 p-1 rounded-md">
                <BsCartPlus size={20} color="white" />
              </button>
            </div>
          </section>

          <section className="w-full">
            <img
              src="https://http2.mlstatic.com/D_617500-MLA94699392298_102025-C.jpg"
              className=" rounded-lg max-h-70 mb-2"
            />
            <p className="font-bold mt-1 mb-2">Iphone 17 Pro Max</p>

            <div className="flex gap-3 items-center">
              <strong className="text-zinc-70">R$ 8.000</strong>
              <button className="bg-zinc-900 p-1 rounded-md">
                <BsCartPlus size={20} color="white" />
              </button>
            </div>
          </section>

          
        </div>
      </main>
    </div>
  );
};
export default Home;
