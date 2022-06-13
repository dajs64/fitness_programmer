import './Header.css'
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div className='header'>Workout App</div>
            </Link>
        </nav>
    );
}

export default Header;