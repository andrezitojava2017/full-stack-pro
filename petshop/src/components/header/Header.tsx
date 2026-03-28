import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="flex w-full items-center justify-center bg-gray-700 text-white h-28">
            <div className="flex  justify-between max-w-[80%] w-full ">
                <div >
                    <h1 className="font-bold font-900 text-2xl ">PetShop</h1>
                    <span className="font-500 text-xs tracking-widest text-yellow-500">PREMIUM STORE</span>
                </div>

                <div className="flex gap-2  items-center border-white border rounded-xl px-8 py-2">
                    <FaCartShopping size={18} color="white" />
                    <button>
                        Carrinho
                    </button>
                </div>
            </div>
        </header>

    )
}

export default Header;