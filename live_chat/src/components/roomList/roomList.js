import React, {useEffect, useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Button, Grid, Input} from "@material-ui/core";


const RoomList = ({roomArr, handleAddGroupItem, handleDellGroupItem, checkerStateRoom}, ) => {
    const [showState, setShowState] = useState(false)
    const [groupName, setGroupName] = useState('')
    const history = useHistory();
    const handleShowAddGroup = () => {
        setShowState((showState) => !showState)
    }
    const handleAddGroup = () => {
        console.log(roomArr.at(-1).id + 1)
        console.log(groupName)
        handleAddGroupItem(roomArr.at(-1).id + 1, groupName)
    }
    const handleDelGroup = (index) => {
        handleDellGroupItem(index)
    }
    useEffect(() => {
        setGroupName('')
        handleShowAddGroup()
    }, [handleAddGroupItem])

    return (
        <>
            <List>
                {roomArr.map((selRoom, index) => {
                        return (
                            <ListItem key={selRoom.id}>
                                <Button onClick={() => history.push(`/rooms/${selRoom.id}`)}>{selRoom.name}</Button>
                                <Button color='error' onClick={() => {
                                    handleDelGroup(selRoom)
                                }}> del </Button>
                            </ListItem>
                        )
                    }
                )
                }
            </List>
            {showState ? '' :
                <Button variant="contained" color='primary' onClick={(e) => {
                    handleShowAddGroup()
                }}> add group </Button>
            }
            {showState ?
                <Grid container>
                    <Grid item>
                        <Input value={groupName} onChange={(e) => {
                            setGroupName(e.target.value)
                        }}/>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => {
                            handleAddGroup()
                        }}>
                            Добавить
                        </Button>
                    </Grid>
                </Grid>
                :
                null
            }

        </>
    )
}

export default RoomList;