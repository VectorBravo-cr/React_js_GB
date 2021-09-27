import React from "react";
import {useState} from "react";
import RoomList from "../components/roomList/roomList";

function RoomsMessage() {
    const [roomsList, setRoomsList] = useState([{id:1, name: 'testRoom1'} , {id:2, name: 'testRoom2'}, {id: 3, name: 'testRoom3'}])
    // const roomsList = [{id: 1, name: 'testRoom1'}, {id: 2, name: 'testRoom2'}, {id: 3, name: 'testRoom3'}]
    const handleAddGroupItem = (id, name) => {
        let roomOmj = {'id': id, 'name': name}
        setRoomsList(roomsList=> [...roomsList, roomOmj])
    }
    const handleDellGroupItem = (index) => {
        console.log(index)
        let strange = roomsList.filter(item => item.id !==index.id)
        console.log(strange)
        setRoomsList(strange)
    }
    const checkerStateRoom = () => {
        return false
    }
    return (
        <RoomList roomArr={roomsList} handleAddGroupItem={handleAddGroupItem} handleDellGroupItem={handleDellGroupItem} checkerStateRoom={checkerStateRoom}/>

    )
}

export default RoomsMessage;