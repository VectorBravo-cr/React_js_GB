import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Rooms from "./pages/rooms";
import Profile from "./pages/profile";
import RoomId from "./components/room/roomId";
import Main from "./pages/Main";
import NotFound from "./pages/notFound/notFound";
import "./assests/stile.css";
import { Redirect } from 'react-router-dom';



function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/rooms/:roomId" component={RoomId}/>
                    <Route exact path="/rooms" component={Rooms}/>
                    <Route exact path="/" component={Main}/>
                    <Route component={NotFound} />
                </Switch>
                
            </BrowserRouter>
        </div>
    );
}

export default App;
