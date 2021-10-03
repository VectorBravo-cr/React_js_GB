import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addRoom, deleteRoom} from "../actions/roomAction";

import RoomList from "../components/roomList/roomList";
import rooms from "../storage/rooms";


function RoomsMessage() {
    const dispatch = useDispatch();
    const rooms = useSelector((state)=> state.rooms)
    const [roomsList, setRoomsList] = useState([])

    const handleAddGroupItem = (id, name) => {
        // let roomOmj = {'id': id, 'name': name}
        // setRoomsList(roomsList => [...roomsList, roomOmj])
        // let room = { id: id, name : name}
        dispatch(addRoom(name))
    }
    const handleDellGroupItem = (index) => {
        console.log(index.id)
        // let strange = roomsList.filter(item => item.id !== index.id)
        // console.log(strange)
        // setRoomsList(strange)
        dispatch(deleteRoom(index.id))
    }
    const checkerStateRoom = () => {
        return false
    }
    useEffect(() => {
        setRoomsList(rooms.usersRooms)
        console.log(rooms.usersRooms)
    }, [rooms])
    return (
        <RoomList roomArr={roomsList} handleAddGroupItem={handleAddGroupItem} handleDellGroupItem={handleDellGroupItem}
                  checkerStateRoom={checkerStateRoom}/>
    )
}

export default RoomsMessage;