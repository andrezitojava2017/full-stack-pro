import type { Product } from "../../interface/product";

type props = {
  productProps: Product;
};

const ProductItem = (productProps: props) => {

  const formatPrice = (price: number) => {
    const resultPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return resultPrice.format(price);
  };

  return (
    <div className="border border-gray-400 rounded-2xl p-4 ">
      <div>
        <img
          src={productProps.productProps.cover}
          alt={productProps.productProps.title}
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">{productProps.productProps.title}</h1>
          <hr className="text-gray-300"></hr>
          <span className="font-medium">{formatPrice(productProps.productProps.price)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
