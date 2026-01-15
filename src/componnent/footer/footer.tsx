import logo from "../../../assets/logo_ask.svg"
import './footer.css'
import { Link } from "react-router-dom"

//<Link to="/about" className="links">About<br/></Link>
//<Link to="/event" className="links">Event<br/></Link>
//<Link to="/partnership" className="links">Partnership<br/></Link>
//<Link to="/contact" className="links">Contact<br/></Link>

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1 className="footer-title"></h1>
            </div>
        </footer>
    )
}

export default Footer;
