import { Link } from "react-router-dom"
import "./css/footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_texts'>
                <Link to='/privacy'>Privacy Policy</Link>
            </div>
        </footer>
    )
}

export default Footer