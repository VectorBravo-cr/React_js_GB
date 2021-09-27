import React from "react";
import {Card, CardContent, CardHeader, Grid,} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

// import MessagesRoom from "../layouts/messagesRoom";
import RoomsMessage from "../layouts/roomsMessage";

const useStyles = makeStyles(({ spacing }) => ({
    card: {
        marginTop: 40,
        transition: '0.3s',
        width: '90%',
        overflow: 'initial',
        background: '#ffffff',
    },
    content: {
        paddingTop: 0,
        textAlign: 'left',
        overflowX: 'auto',
    },
}));

function Rooms() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader>
                <h1>HomeWork3</h1>
            </CardHeader>
            <CardContent color='primary'>
                <Grid container >
                    <Grid item>
                        <div><RoomsMessage/></div>
                    </Grid>
                    {/*<Grid item md='3'>*/}
                    {/*    <div><MessagesRoom/></div>*/}
                    {/*</Grid>*/}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Rooms;