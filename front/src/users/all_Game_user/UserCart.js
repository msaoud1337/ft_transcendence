
import image from "../../images/profil.svg"

export default function UserCart ({data, value_1, value_2, numberOfUsers}) {

    console.log(numberOfUsers)
    
    return (
        <div className="user_cart_container">
            {data.avatar_url
            ? <img src={data.avatar_url} alt=""/>
            : <img src={image} alt=""/>
        }
            <p>{data && data.user_name}</p>
            <div>
                <button className="user_cart_add">{value_1}</button>
                <button className="user_cart_block">{value_2}</button>
            </div>
        </div>
    )
}