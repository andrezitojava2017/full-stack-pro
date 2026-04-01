

interface Product {
    id: number;
    title: string;
    description: string;
    cover: string;
    price: number;
}

interface CartItem extends Product {
    quantity: number;
}

const ItemCart = ({ data }: { data: CartItem }) => {
    return (
        <div className=" flex justify-between border border-gray-400 rounded-2xl p-2 mt-4">
            <div className="flex items-center">
                <img src={data.cover} alt={data.title} className="object-cover h-30 " />
                <h1 className="font-stretch-50%">{data.title}</h1>
            </div>
            <div className="flex items-center  gap-4">
                <div className="flex  items-center gap-4">
                    <button className="bg-red-200 rounded-4xl p-2"> - </button>
                    <span className="font-medium">{data.quantity}</span>
                    <button className="bg-green-300 rounded-4xl p-2"> + </button>
                </div>
                <div>
                    <span className="font-medium">{new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(data.price)}</span>
                </div>
            </div>
        </div>
    );
}
export default ItemCart;