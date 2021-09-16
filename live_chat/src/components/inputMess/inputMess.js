import React from 'react'
import {useState, useEffect} from 'react'
import button from '../../assests/styled_box.css'

function InputMess({changeFunc}){
    const [message, setMessage] = useState('')
    const handleInputText = (e) => {
        setMessage(e.target.value)
    }
    useEffect(()=>{

    },[])
    return(
        <>
            <input

                onChange={(e)=>{handleInputText(e)}}
                value={message}
                placeholder="Вводим текст"
                type="text"
            />
            <button onClick={()=>{
                changeFunc(message)
            }
            }>Пушим</button>
        </>
    )
}
export default InputMess