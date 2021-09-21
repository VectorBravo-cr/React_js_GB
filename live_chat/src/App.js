import React from "react";

import Rooms from "./pages/rooms";

import {makeStyles} from "@material-ui/styles";
import styled from "assests/teststyled";

const useStyles = makeStyles(styled)
function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Rooms/>
        </div>
    );
}

export default App;
