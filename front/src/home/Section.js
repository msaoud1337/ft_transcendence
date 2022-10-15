import pong from "../images/pingpong.png"
import pong2 from "../images/3.png"
import Navbar from "./Navbar";
import "../styles/section.css"

function Section({setshow}) {
    return (
        <div className="section_1">
            <div className="section_container">
                <div>
                    <img src={pong} className="pong pong1" alt=""/>
                </div>
                <div>
                    <img src={pong2} className="pong" alt="" />
                </div>
                <button className='Play' onClick={() => setshow(true)}>Play Now</button>
            </div>
        </div>
    )
}

export default Section;