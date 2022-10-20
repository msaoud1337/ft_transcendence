import Profil from "../images/profil.svg"

export default function Result({profile}) {
    return (
        <div className="result_container">
            <div className="first_Player">
                <img src={profile.imageUrl} alt="" className="profileImg_history"/>
                <div>{profile.name}</div>
            </div>
            <div className="Result">
                <p>10</p>
                <p>-</p>
                <p>7</p>
            </div>
            <div className="first_Player">
                <img src={Profil} alt=""/>
                <div>Name of Player 2</div>
            </div>
        </div>
    )
}
