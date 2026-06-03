import logo from "./assets/grocera.png"
import "./css/header.css"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Grocera Logo" className="header_logo"/>
            </Link>
            <Link to="/createlist" className='header_createlist_button'>Create Shopping List</Link>
        </header>
    )
}

export default Header