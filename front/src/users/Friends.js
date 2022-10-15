import Bar from "./Bar"
import line from "../images/Line.svg"


export default function Friends() {
    return (
        <div>
            <Bar name="Friends" />
            <img src={line} alt="" />
        </div>
    )
}