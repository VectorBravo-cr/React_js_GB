import React from "react";
import Rooms from "./pages/rooms";
import Profile from "./pages/profile";
import Main from "./pages/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assests/stile.css";


function App() {
    return (
        <div>
            <BrowserRouter basename="/#/">
                <Switch>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/rooms" component={Rooms} />
                    <Route exact path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
