import "./keyNum.css"

const KeyNum = () => {
    return (
        <div style={{marginTop: "40px"}}>
            <div className="wrapper-left">
                <p className="number" style={{marginLeft: "50px"}}>17</p>
                <p>evenements d’ampleur regionale ou plus</p>
            </div>
            <div className="wrapper-right">
                <p className="number" style={{marginRight: "50px"}}>140</p>
                <p>tournois hebdomadaires</p>
            </div>
            <div className="wrapper-left">
                <p className="number" style={{marginLeft: "50px"}}>416</p>
                <p>participants pour smashmania</p>
            </div>
            <div className="wrapper-right">
                <p className="number" style={{marginRight: "50px"}}>4</p>
                <p>lieux d’accueil d’evenements</p>
            </div>
        </div>
    )
}

export default KeyNum;