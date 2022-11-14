import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import image from "../../images/default_profile.png"

export default function RequestComp({data}) {
    return  (
        <div className="notification_element">
            <div className="notification_image_container">
                <img src={data.avatar_url ? data.avatar_url : image} alt=""/>
            </div>
            <div className="notification_data_container">
                <div className="notification_type">Friend request !</div>
                <div className="notification_data">
                    <div className='notification_User_name'>{data.user_name}</div> 
                    <div style={{fontSize : "1.4rem"}}>sent to you friend request</div>
                </div>
            </div>
            <div className='check_notification'>
                <FontAwesomeIcon icon={faCheck} />
            </div>          
            <div className='check_notification decline'>
                <FontAwesomeIcon icon={faXmark} />
            </div>          
        </div>
    )
}