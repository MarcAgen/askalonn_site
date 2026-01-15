import presImg from "../../../assets/leny.svg"
import Footer from "../footer/footer"
import "./homePres.css"

export function HomePres() {
    return (
        <div style={{bottom: "90px"}}>
            <h1 style={{position: "absolute", marginTop: "150px", marginLeft: "355px", fontSize: "85px"}}>
                QUI SOMMES<br/>NOUS ?
            </h1>
            <img aria-hidden src={presImg} className="home-pres-img"/>
        </div>
    )
}
