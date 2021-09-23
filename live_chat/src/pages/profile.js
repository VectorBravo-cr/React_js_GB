import React from "react";
import {useState} from "react";
import ProfileCard from "../layouts/profileCard";
import {Card, CardHeader} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

function Profile(){

    return (
        <>
            <Card>
                <CardHeader>
                    <ProfileCard/>
                </CardHeader>
                <CardContent>
                    <h3>
                        *-*-*-*
                    </h3>
                </CardContent>
            </Card>
        </>
    )
}
export default Profile