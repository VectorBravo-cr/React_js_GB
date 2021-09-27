import React from 'react'

function MessageList( {messageArr} ){

    return (
        <ul>
            {messageArr.map((selMessage)=>{
                    return(
                        <li key={selMessage.id}>
                            <div>({selMessage.time}) : <strong>{selMessage.author}</strong></div><div>{selMessage.text}</div>
                        </li>
                    )
                }
            )
            }
        </ul>
    )
}

export default MessageList;