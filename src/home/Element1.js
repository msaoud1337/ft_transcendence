import Rectangle from "../images/Rectangle.svg"
import cercle from "../images/Ellipse 2.svg"

export default function Element1() {

    return (
        <div className="container_element1">
            <div className="element_1_section1">
                <div className="element_1_pong">Pong</div>
                <div className="element_1_text">Pong is a table tennis–themed twitch arcade sports video game, featuring simple two-dimensional <br/>graphics, manufactured by Atari and originally released in 1972</div>
            </div>
            <div className="element_1_section2">
                <div className="bar1">
                    <img src={Rectangle} className="image12" alt=""/>
                </div>
                <div className="cercle">
                    <img src={cercle}   alt=""/>
                </div>
                <div className="bar2">
                    <img src={Rectangle} className="image12" alt=""/>
                </div>
            </div>
        </div>
    )
        
}