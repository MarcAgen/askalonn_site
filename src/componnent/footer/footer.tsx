import './footer.css'
import { Link } from "react-router-dom"

//import logo for social media
import insta from "../../../assets/logo_media/insta_logo.png"
import twitter from "../../../assets/logo_media/X_logo.png"
import youtube from "../../../assets/logo_media/yt_logo.png"
import twitch from "../../../assets/logo_media/twitch_logo.png"


const Footer = () => {
    return (
            <footer style={{display: "flex", width: "100%", justifyContent: "space-between"}} aria-label='footer'>
                {/* ASK social media */}
                <div className="footer-img">
                    <div>
                        <a href="https://x.com/TeamAskalonn" aria-label="ask-x">
                            <img src={twitter} alt="X" style={{height: "30px", width: "30px"}}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/askalonn.team/">
                            <img src={insta} alt="ask-instagram" style={{height: "60px", width: "60px"}}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.twitch.tv/teamaskalonn">
                            <img src={twitch} alt="ask-twitch" style={{height: "30px", width: "30px"}}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@TeamAskalonn">
                            <img src={youtube} alt="ask-youtube" style={{height: "35px", width: "35px", marginLeft: "15px"}}/>
                        </a>
                    </div>
                </div>
                {/* usefull links (such as home, about, ect) */}
                <div style={{flex: 1}}>
                    <p className="footer-head-txt">Useful links</p>
                    <Link to="/about" className="footer-links">About<br/></Link>
                    <Link to="/event" className="footer-links">Event<br/></Link>
                    <Link to="/partnership" className="footer-links">Partnership<br/></Link>
                    <Link to="/contact" className="footer-links">Contact</Link>
                </div>
                {/* other links (such as legal mention, ect) */}
                <div style={{flex: 1}}>
                    <p className="footer-head-txt">Informations</p>
                    <Link to="/legal_mentions" className="footer-links">Legal Mentions</Link>
                </div>
            </footer>
    )
}

export default Footer;
