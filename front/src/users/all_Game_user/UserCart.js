
import axios from "axios"
import image from "../../images/profil.svg"

export default function UserCart ({data, value_1, value_2}) {
    
    const token = JSON.parse(localStorage.getItem("user_token"))

    const removeFriend = () => {

    }
    
    const sendFriendRequest = () => {

        axios.patch("http://localhost:3001/api/users/friend-request/",
            {
                "recipientId" : data.id,
            },{
                headers : {
                    Authorization : `Bearer ${token}`,
                }
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const BlockUser = () => {
        
        axios.patch("http://localhost:3001/api/users/friend-block/", {
            "blockId" : data.id,
        },{
            headers : {
                Authorization : `Bearer ${token}`,
            }    
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    
    return (
        <div className="user_cart_container">
            {data.avatar_url
            ? <img src={data.avatar_url} alt=""/>
            : <img src={image} alt=""/>
        }
            <p>{data && data.user_name}</p>
            <div>
                <button 
                    className="user_cart_add" 
                    onClick={value_1 === "Add_friend" ? sendFriendRequest : removeFriend}>
                    {value_1}
                </button>
                <button className="user_cart_block" onClick={BlockUser}>{value_2}</button>
            </div>
        </div>
    )
}