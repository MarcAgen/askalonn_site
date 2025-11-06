import presImg from "../../assets/leny.svg"
import "./homePres.css"

export function HomePres() {
    return (
        <div>
            <img aria-hidden src={presImg} className="home-pres-img"/>
        </div>
    )
}