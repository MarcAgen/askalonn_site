import "./headerApp.css"
import logo from "../../../assets/logo_ask.svg"
import App from "../homeApp"
import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="logo-hdr">
            <a href="https://team-askalonn.com/">
                <img className="logo-header" key={logo} src={logo}></img>
            </a>
        </div>
    )
}

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <span>
                    <Logo/>
                </span>
            </Link>

            <div style={{display:"flex", alignItems:"center"}}>
                <Link to="/about" className="links">About</Link>
            </div>

            <div style={{display:"flex", alignItems:"center"}}>
                <Link to="/event" className="links">Event</Link>
            </div>

            <div style={{display:"flex", alignItems:"center"}}>
                <Link to="/partnership" className="links">Partnership</Link>
            </div>

            <div style={{display:"flex", alignItems:"center"}}>
                <Link to="/contact" className="links">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar