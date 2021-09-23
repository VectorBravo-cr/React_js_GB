import React from "react";
import {Card, CardContent, CardHeader, } from "@material-ui/core";

import MessagesRoom from "../layouts/messagesRoom";
import RoomsMessage from "../layouts/roomsMessage";

function Rooms(){
    return(
        <Card>
            <CardHeader>
                <h1>HomeWork3</h1>
            </CardHeader>
            <CardContent color='primary'>

                <div><RoomsMessage/></div>
                <div><MessagesRoom/></div>

            </CardContent>
        </Card>
    )
}
export default Rooms;