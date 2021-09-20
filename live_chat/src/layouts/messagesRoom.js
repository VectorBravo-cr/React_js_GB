import React, {useEffect, useState, useRef} from 'react';

import MessageList from "../components/messageList/messageList";
import Author from "../components/author/author";
import InputMess from "../components/inputMess/inputMess";
import {Card, CardActionArea, CardHeader,} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

function MessagesRoom(){

    const [idCount, setIdCount] = useState(3)
    const [author, setAuthor] = useState('default')
    const [showInput, setShowInput] = useState(false)
    const [myHeader, setMyHeader] = useState('HomeWork3')
    const [messageList, setMessageList] = useState(
        [
            {
                id:1,
                author:'tester',
                text:'im push test text',
                time: '1:30:45'
            },
            {
                id:2,
                author:'tester',
                text:'im push test text2',
                time: '1:30:46'
            }
        ]
    )

    const hanlePusherMessage = (messageItem, flag=true) => {
        let test
        setIdCount((idCount)=>idCount+1)
        if (flag){
            test =  {
                id: idCount,
                author: author,
                text: messageItem,
                time: Date().toLocaleString().split(" ")[4]
            }
        } else {
            test = {
                id: idCount,
                author: "ROBOT",
                text: messageItem,
                time: Date().toLocaleString().split(" ")[4]
            }
        }
        setMessageList(messageList => [...messageList, test])
    }
    const handleSetAuthor = (author) => {
        setAuthor(author)
        setShowInput((showInput)=>!showInput)
    }

    const robot = () =>{
        hanlePusherMessage("INPUT YOUR NIKNAME", false)
        setShowInput((showInput)=>!showInput)
    }

    const checkerDefAuthor = (last_message) => {
        if (last_message.author === 'default'){
            setTimeout(robot, 1500)
        }
    }

    useEffect(()=>{
        checkerDefAuthor(messageList[messageList.length-1])

    },[messageList])

    useEffect(()=>{

    },[])

    return(
        <>
            <Card sx={{ maxWidth: 400 }} >
                <CardHeader>
                    <h4>{myHeader}</h4>
                </CardHeader>
                <CardContent>
                    <MessageList messageArr={messageList}/>
                </CardContent>
                <CardActionArea>
                    <Author stateInput={showInput} handleSumbitAuthor={handleSetAuthor}/>
                    <InputMess changeFunc={
                        hanlePusherMessage
                    }

                    />
                </CardActionArea>

            </Card>
        </>
    )
}
export default MessagesRoom;