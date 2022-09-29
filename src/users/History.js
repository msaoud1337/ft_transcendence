import Bar from "./Bar";
import His from "./His";
import "../styles/users.css"
import Line from "../images/Line.svg"

export default function History() {
    return (
        <div className="History_container">
            <Bar name="History" />
            <img src={Line} alt=""/>
            <His />
        </div>
    )
}