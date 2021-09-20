import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function RoomList( {roomArr} ){

    return (
        <List>
            {roomArr.map((selRoom)=>{
                    return(
                        <ListItem key={selRoom.id}>
                            <div>{selRoom.name}</div>
                        </ListItem>
                    )
                }
            )
            }
        </List>
    )
}

export default RoomList;