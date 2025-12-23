import "./headerApp.css"
import { NavLink } from "react-router-dom"
import logo from "../../../assets/logo_ask.svg"

const Logo = () => {
    return (
        <div className="logo-hdr">
            <a href="https://team-askalonn.com/">
                <img className="logo-header" key={logo} src={logo}></img>
            </a>
        </div>
    )
}

const Nav = () => {
    return (
        <div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/event">Event</NavLink>
            <NavLink to="/partnership">Partnership</NavLink>
        </div>
    )
}

export function HeaderApp() {
    return (
        <div>
            <header className="header">
                <Logo/>
                <Nav/>
            </header>
        </div>
    )
}