
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default function AllUserData({name, setRender}) {

    return (
        <div className="bar_up">
            <div>{name}</div>
            <div className='see_all_container'>
                <div className="See_all" onClick={setRender}>See All</div>
                <FontAwesomeIcon icon={faAngleRight} className="right_direction" onClick={setRender}/>
            </div>
        </div>
    )
}