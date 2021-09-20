import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {Button, Input} from "@material-ui/core";

function InputMess({changeFunc}){
    const [message, setMessage] = useState('')
    const handleInputText = (e) => {
        setMessage(e.target.value)
    }
    const textInputRef = useRef(null);
    const handleRef =() =>{
        textInputRef.current.focus();
    }
    useEffect(()=>{
        handleRef()
    },[])
    return(
        <>
            <Input
                onChange={(e)=>{handleInputText(e)}}
                value={message}
                placeholder="Вводим текст"
                type="text"
            />
            <Button
                ariant="contained" color="primary" size='small'
                onClick={()=>{
                    changeFunc(message)
                }
                }>Пушим</Button>
        </>
    )
}
export default InputMess