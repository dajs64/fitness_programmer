import './Header.css'
import { Link } from "react-router-dom";
import Logo from "../components/workoutlogo.png";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <img src={Logo} className="logo"/>
            </Link>
        </nav>
    );
}

export default Header;