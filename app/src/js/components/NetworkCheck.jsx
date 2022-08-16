import React from "react";
import useNetworkStatus from 'react-detect-internet-connection'

const NetworkCheck = ()=>{
    const { isOnline} = useNetworkStatus();

    return <div className="noti-bar">
        {isOnline ? "": <div> Uh-oh looks like you should connect to the internet </div>}
    </div>
}

export default NetworkCheck;