import { useEffect, useState } from "react";
import ProductItem from "../../components/product/product";
import type { Product } from "../../interface/product";
import { instanceApi } from "../../api/config";

const Home = () => {
  const [listProducts, setListProducts] = useState<Product[]>([]);

  useEffect(() => {
    instanceApi({
      url: "/products/",
      method: "get",
    })
      .then((result) => {
        //  console.log(result.data);
        setListProducts(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <aside className=" flex max-w-[80%] w-full mt-8 border-b-amber-400 border-b-2 pb-8 ">
        <div className=" flex-2">
          <span className="font-500 text-xs tracking-widest text-amber-500">
            NOSSA LOJA
          </span>
          <h1 className="font-900 text-5xl font-serif pt-2">
            Tudo que seu<br></br>
            <span className="text-[#1a7a6e]">pet merece</span>
          </h1>
        </div>
        <div className="flex-1 justify-center items-end-safe flex">
          <p className="text-gray-400">
            Produtos selecionados com carinho para o bem-estar e felicidade do
            seu companheiro.
          </p>
        </div>
      </aside>

      <section className="grid grid-cols-2 lg:grid-cols-4 max-w-[80%] w-full my-8 gap-4">
        {listProducts.length !== 0 ? (
          listProducts.map((item) => <ProductItem productProps={item} />)
        ) : (
          <div className=" bg-amber-400">
            <h1 className="text-center">Carregando Lista</h1>
          </div>
        )}
      </section>
    </main>
  );
};
export default Home;
