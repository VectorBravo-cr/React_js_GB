import React from "react";

import Rooms from "./pages/rooms";

import {makeStyles} from "@material-ui/styles";
import styled from "@material-ui/core/styles/styled";

const useStyles = makeStyles(styled)
function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Rooms classes={classes}/>
        </div>
    );
}

export default App;
