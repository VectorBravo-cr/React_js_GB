import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {Button, Grid, Input} from "@material-ui/core";

function InputMess({changeFunc}, props){
    const [message, setMessage] = useState('')
    const handleInputText = (e) => {
        setMessage(e.target.value)
    }
    const ref = useRef(null);

    useEffect(()=>{
        ref?.current?.focus();
        
    },[])

    return(
        <Grid>
            <Input
                onChange={(e)=>{handleInputText(e)}}
                value={message}
                placeholder="Вводим текст"
                type="text"
                ref={ref}
            />
            <Button
                variant="contained" color="primary" size='small'
                onClick={()=>{
                    changeFunc(message)
                }
                }>Пушим</Button>
        </Grid>
    )
}
export default InputMess