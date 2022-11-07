import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faUserGroup, faUserSlash} from '@fortawesome/free-solid-svg-icons'
import "../../styles/users.css"

export default function Manage_user(obj) {
	return(
		<div className='all_users_section_1'>
			<div className={obj.users ? 'manage_user_icons_active' : 'manage_user_icons'} onClick={obj.renderAllUser}>
					<FontAwesomeIcon icon={faUsers}/>
					{obj.numberOfUsers 
					?	<p>All users ({obj.numberOfUsers})</p>
					:	<p>All users</p>
				}                 
			</div> 
			<div className={obj.friend ? 'manage_user_icons_active' : 'manage_user_icons'} onClick={obj.renderFriends}>
				<FontAwesomeIcon icon={faUserGroup}/>
				<p>Friends</p>
			</div>
			<div className={obj.Blocked ? 'manage_user_icons_active' : 'manage_user_icons'} onClick={obj.renderBlocked}>
				<FontAwesomeIcon icon={faUserSlash}/>
				<p>Blocked Users</p>
			</div>
		</div>
	)
}