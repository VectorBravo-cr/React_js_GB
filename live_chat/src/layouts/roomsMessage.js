import React from "react";
import {useState} from 'react'
import RoomList from "../components/roomList/roomList";

function RoomsMessage(){
    // const [roomsList, setRoomsList] = useState([{id:1, name: 'testRoom1'} , {id:2, name: 'testRoom3'}])
    const roomsList = [{id:1, name: 'testRoom1'} , {id:2, name: 'testRoom3'}]
    return(
        <RoomList roomArr={roomsList}/>
    )
}
export default RoomsMessage;