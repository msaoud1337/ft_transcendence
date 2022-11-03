import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faUserGroup, faUserSlash} from '@fortawesome/free-solid-svg-icons'
import "../../styles/users.css"

export default function Manage_user({renderAllUser, renderBlocked, renderFriends}) {
    return(
        <div className='all_users_section_1'>
            <div className='manage_user_icons' onClick={renderAllUser}>
                <FontAwesomeIcon icon={faUsers}/>
                <p>All users</p>                    
            </div>
            <div className='manage_user_icons' onClick={renderFriends}>
                <FontAwesomeIcon icon={faUserGroup}/>
                <p>Friends</p>
            </div>
            <div className='manage_user_icons' onClick={renderBlocked}>
                <FontAwesomeIcon icon={faUserSlash}/>
                <p>Blocked Users</p>
            </div>
        </div>
    )
}