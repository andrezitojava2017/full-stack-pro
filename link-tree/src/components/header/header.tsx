import { signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router";
import { auth } from "../../service/firebase";

const Header = () => {

    const handleLogout = async () => {
        await signOut(auth)
    }

  return (
    <header className=" w-full max-w-2xl pt-4 px-1">
        <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-2">
            <div className="flex gap-4 font-medium">
                <Link to="/">Principal</Link>
                <Link to="/admin">Administrativo</Link>
                <Link to="/networks">Social</Link>
            </div>
            <button onClick={handleLogout}>
                <BiLogOut size={24} />
            </button>
        </nav>
    </header>
  );
}   
export default Header;