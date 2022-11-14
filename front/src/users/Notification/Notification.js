import RequestComp from "./ResquestComp"


export default function Notification({notification, displayNotification}) {

    console.log("rendred !!", notification)
    
    return (
        <div className="modal_notification">
            <div className="notification_components">
                <div className="notification_comp">
                    <p onClick={displayNotification} style={{textDecoration : "underline", cursor : "pointer"}}>close</p>
                    <p>notification ({notification.length})</p>
                </div>
                {notification && notification.map((data, i) => {
                    return (<RequestComp key={i} data={data}/>)
                })}
            </div>
        </div>
    )
}