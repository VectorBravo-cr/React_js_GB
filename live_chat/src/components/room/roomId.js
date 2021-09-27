import React from "react";
import {useEffect} from "react";
import {useParams, useHistory, useRouteMatch} from "react-router-dom";
import MessagesRoom from "../../layouts/messagesRoom";
import {Card, Grid} from "@material-ui/core";

function RoomId( ) {
    const {roomId} = useParams();
    const history = useHistory();

    useEffect(() => {
        if (roomId === undefined) {
            history.push("/rooms");
        }
    }, []);
    return (
            <Grid container>
                <Grid md='2'>типа выровнил</Grid>
                <Grid md='3'>
                    <h3> Твоя комната- {roomId}</h3>
                    <p> Правила чата и тп</p>
                </Grid>
                <Grid md='6'>
                    <MessagesRoom/>
                </Grid>
            </Grid>
    )
}

export default RoomId;
