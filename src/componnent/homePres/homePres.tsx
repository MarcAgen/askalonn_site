import presImg from "../../../assets/leny.svg"
import "./homePres.css"

export function HomePres() {
    return (
        <div style={{marginTop: "10rem"}}>
            <h1 className="title">
                QUI SOMMES<br/>NOUS ?
            </h1>
            <div className="presentation">
                <p className="pres-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit eros, blandit non pharetra cursus, cursus et nulla. Nulla at lacus aliquet, aliquam ipsum et, varius nisi. Sed varius turpis ligula, vel ornare leo tristique eget. Phasellus dapibus quis orci eget scelerisque. Cras feugiat congue metus, sit amet interdum ligula faucibus vitae. Cras a faucibus augue, porttitor maximus tortor. Nunc quam ante, porta et turpis ut, volutpat lacinia nisi. Vivamus eget arcu sit amet ipsum vehicula malesuada a id mi. Nulla at dolor tortor. Aliquam neque lacus, fringilla non iaculis a, tristique ac sapien. Nam blandit metus velit, eu porttitor metus congue quis. Proin risus velit, condimentum in lacinia sit amet, aliquet quis velit. Vestibulum at nibh a augue cursus convallis consequat at felis. Sed cursus eleifend risus quis mattis. Phasellus a suscipit orci, non sagittis mi.</p>
                <img aria-hidden src={presImg} className="home-pres-img"/>
            </div>
        </div>
    )
}
