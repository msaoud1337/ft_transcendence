
import image from "../../images/profil.svg"

export default function UserCart ({data}) {
    return (
        <div className="user_cart_container">
            { !data 
            ? <img src={data.avatar_url} alt=""/>
            : <img src={image} alt=""/>
        }
            <p>{data && data.user_name}</p>
            <div>
                <button className="user_cart_add">Add Friend</button>
                <button className="user_cart_block">Block</button>
            </div>
        </div>
    )
}