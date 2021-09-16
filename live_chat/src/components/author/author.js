import React from 'react'
import {useState} from 'react'

function Author( {stateInput, handleSumbitAuthor} ){
    const [author, setAuthor] = useState('')
    const handleInputAuthor = (e) => {
        setAuthor(e.target.value)
    }
    return (
        <div>
            <div>
                <label>{author} - your nikname</label>
            </div>
            <div>
                {stateInput?
                    <div>
                        <input
                            onChange={(e)=>{handleInputAuthor(e)}}
                            value={author}
                            placeholder="Вводим ник"
                            type="text"/>

                        <button
                            onClick={()=>{
                                handleSumbitAuthor(author)}}>
                            Изменить ник
                        </button>
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default Author;