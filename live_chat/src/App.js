import MessageList from "./components/messageList/messageList";
import InputMess from "./components/inputMess/inputMess";
import {useEffect, useState} from "react";
import Author from "./components/author/author";

function App() {
    const [idCount, setIdCount] = useState(3)
    const [author, setAuthor] = useState('default')
    const [showInput, setShowInput] = useState(false)
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
        console.log('Author: ', author)
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
        console.log(messageList[messageList.length-1])
        checkerDefAuthor(messageList[messageList.length-1])

    },[messageList])

    return (
        <div className="App">
            <header> HomeWork2 - Chat </header>
            <div>
                <MessageList messageArr={messageList}/>
                <Author stateInput={showInput} handleSumbitAuthor={handleSetAuthor}/>
                <InputMess changeFunc={
                    hanlePusherMessage
                }/>
            </div>
        </div>
    );
}

export default App;
