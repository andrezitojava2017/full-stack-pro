import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const signed = true;
  const loadingAuth = false;

  return (
    <div className="w-full flex items-center justify-center h-16 bg-gray-800">
      <header className="w-full max-w-7xl flex items-center justify-between px-4">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        {!signed && !loadingAuth ? (
          <Link to="/login" className="text-white">
            Sign In
          </Link>
        ) : (
          <Link to="/dashboard">
            <FiUser size={24} color="white" />
          </Link>
        )}
      </header>
    </div>
  );
};
export default Header;
