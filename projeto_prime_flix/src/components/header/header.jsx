import { Link } from "react-router";
import "./header.css";

const Header = ()=>{
    return(
        <header>
           <Link className="logo" to={'/'}>Prime Flix</Link>
           <Link className="favoritos" to={'/favoritos'}>Favoritos</Link>
        </header>
    )
}

export default Header;