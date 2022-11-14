import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faUserGroup, faUserSlash} from '@fortawesome/free-solid-svg-icons'
import "../../styles/users.css"

export default function Manage_user(obj) {
	return(
		<div className='all_users_section_1'>
			<div className={obj.userStat === "all_users" ? 'manage_user_icons_active' : 'manage_user_icons'} onClick={obj.renderAllUser}>
					<FontAwesomeIcon icon={faUsers}/>
					<p>All users ({obj.allUserNbr})</p>     
			</div> 
			<div className={obj.userStat === "friends" ? 'manage_user_icons_active' : 'manage_user_icons'} onClick={obj.renderFriends}>
				<FontAwesomeIcon icon={faUserGroup}/>
					<p>Friends ({obj.FriendNbr})</p>
			</div>
			<div className={obj.userStat === "blocked_users" ? 'manage_user_icons_active' : 'manage_user_icons'} onClick={obj.renderBlocked}>
				<FontAwesomeIcon icon={faUserSlash}/>
				<p>Blocked Users ({obj.BlockedNbr})</p>
			</div>
		</div>
	)
}