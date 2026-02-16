import { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import api from "../../api/api";
import { CartContext } from "../../context/context";

export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

const Home = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const {addItemCart} = useContext(CartContext)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get<ProductsProps[]>("/products");
        setProducts(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);


  const handleAddCardItem = (product : ProductsProps)=>{

    addItemCart(product)
  }


  return (
    <div>
      <main className="w-full max-w-5xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5 ">
          {products.length > 0 ? (
            products.map((product) => (
            
              <section
                className=" flex flex-col justify-evenly w-full border-gray-400 border rounded-md px-3 "
                key={product.id}
              >
                <img src={product.cover} className="rounded-lg max-h-70 mb-2" />
                <p className="font-bold mt-1 mb-2">{product.title}</p>

                <div className="flex gap-3 items-center mb-3">
                  <strong className="text-zinc-70">
                    {product.price.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                  </strong>
                  <button className="bg-zinc-900 p-1 rounded-md">
                    <BsCartPlus size={20} color="white" onClick={()=>handleAddCardItem(product)}/>
                  </button>
                </div>
              </section>
            ))
          ) : (
            <p>Carregando produtos...</p>
          )}
        </div>
      </main>
    </div>
  );
};
export default Home;
