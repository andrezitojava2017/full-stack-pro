import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { ProductsProps } from "../home/Home";
import { CartContext } from "../../context/context";
import toast from "react-hot-toast";

const ProductDetails = () => {

    const productId = useParams();
    const [productDetails, setProductDetails] = useState<ProductsProps>();
    const { addItemCart } = useContext(CartContext)

    const handleGetProductDetails = async (id: string) => {
        try {
            fetch(`http://localhost:3000/products/${id}`)
                .then(response => response.json())
                .then(data => {
                    setProductDetails(data);
                })
                .catch(error => {
                    console.error("Error fetching product details:", error);
                });
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    useEffect(() => {
        if (productId?.id) {
            handleGetProductDetails(productId.id);
        }

    }, [productId])


    const handleAddCardItem = (product: ProductsProps) => {
        toast.success(`${product.title} adicionado ao carrinho!`)
        addItemCart(product)
    }


    return (
        <div>
            <main className="w-full max-w-5xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-8 mt-10 text-center">Detalhe do produto</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <img src={productDetails?.cover} className="rounded-lg max-h-70 mb-2" />
                    <div>
                        <h1 className="font-bold text-2xl mb-2">{productDetails?.title}</h1>
                        <p>{productDetails?.description}</p>
                        <p className="mt-2 text-2xl mb-2">
                            <strong >{productDetails?.price?.toLocaleString("pt-BR", {
                                currency: "BRL",
                                style: "currency",
                            })}
                            </strong>
                        </p>

                        <button className="bg-zinc-900 p-2 rounded-md" onClick={() => handleAddCardItem(productDetails as ProductsProps)}>
                            <span className="text-white">Adicionar ao carrinho</span>
                           
                        </button>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default ProductDetails;