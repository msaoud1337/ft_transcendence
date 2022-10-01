import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark} from "@fortawesome/free-solid-svg-icons"

export default function RegistrationCom({onClose}) {
    return (
        <div className="modil" onClick={e => e.stopPropagation()}>
            <div className="modil_close">
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={onClose}
                    className="Log_modal" />
            </div>    
                <div className="icone_modal"></div>
                <h1 className="Log_modal">Log In</h1>
        </div>
    )
}