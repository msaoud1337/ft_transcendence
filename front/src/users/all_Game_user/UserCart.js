
import axios from "axios"
import image from "../../images/profil.svg"

export default function UserCart ({data, value_1, value_2, NewUpdates, updates}) {
    
    const token = JSON.parse(localStorage.getItem("user_token"))
    
    const unFriend = () => {

        console.log("unfriend process !")
        axios.patch("http://localhost:3001/api/users/remove-relation",{
            "rejectedId" : data.id
        },{
            headers : {
                Authorization : `Bearer ${token}`,
            }
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
        NewUpdates()
    }
    
    const Add_friend = () => {
        
        axios.patch("http://localhost:3001/api/users/friend-request/",{
            "recipientId" : data.id,
           },{
               headers : {
                   Authorization : `Bearer ${token}`,
               }
           })
           .then(response => console.log(response))
           .catch(err => console.log(err))
           NewUpdates()
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
        NewUpdates()
    }
    
    const Unblock = () => {
        
        axios.patch("http://localhost:3001/api/users/friend-unblock/",{
            "unblockId" : data.id,
        },{
            headers : {
                Authorization : `Bearer ${token}`
            }
        }
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
        unFriend() // bug here 
        // NewUpdates()
    }

    const buttonHundle = () => {

        switch(value_1){
            case "Unfriend" :
                return  unFriend()
            case "Add_friend" :
                return Add_friend()
        }
    }

    const button2Hundle = () => {
        
        switch(value_2){
            case "Unblock" :
                return Unblock()
            case "Block" :
                return BlockUser()
        }
    }


    
    return (
        <div className="user_cart_container">
            {data.avatar_url
            ? <img src={data.avatar_url} alt=""/>
            : <img src={image} alt=""/>
        }
            <p>{data && data.user_name}</p>
            <div>
                {value_2 !== "Unblock"
                    ?<button 
                        className="user_cart_add" 
                        onClick={buttonHundle}>
                        {value_1}
                    </button>
                    : null
            }
                <button 
                    className="user_cart_block"
                    onClick={button2Hundle}>
                        {value_2}
                </button>
            </div>
        </div>
    )
}