import { signOut } from "firebase/auth";
import { Link, Navigate } from "react-router";
import { auth } from "../../services/firebaseConfig";

const Painelheader: React.FC = () => {

    const handleLogout = async () => {
        await signOut(auth);
        Navigate({to:'/login'})
    }

    return (
        <div className="w-full flex rounded-lg mb-4 bg-red-400 items-center py-2 gap-4 px-2 font-medium text-white">
            <Link
                to='/dashboard'
            >
                Dashboard
            </Link>
            <Link to='/dashboard/new'
            >
                Novo Registro
            </Link>

            <button
                onClick={() => handleLogout}
                className="ml-auto"
            >
                Sair da conta
            </button>
        </div>
    );
}

export default Painelheader;