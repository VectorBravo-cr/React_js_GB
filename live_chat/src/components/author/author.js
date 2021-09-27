import React from 'react'
import {useState} from 'react'
import {Button, TextField} from "@material-ui/core";

function Author( {stateInput, handleSumbitAuthor} ){
    const [author, setAuthor] = useState('')
    const handleInputAuthor = (e) => {
        setAuthor(e.target.value)
    }
    return (
        <>
            <div>
                {author===''? '' :
                <label>{author} - your nikname</label>
                }
            </div>
            <div>
                {stateInput?
                    <div>
                        <TextField

                            variant="outlined"
                            size="small"
                            onChange={(e)=>{handleInputAuthor(e)}}
                            value={author}
                            placeholder="Вводим ник"
                            />

                        <Button variant="contained" color="primary" size='small' 
                            onClick={()=>{
                                handleSumbitAuthor(author)}}>
                            Изменить ник
                        </Button>
                    </div>
                    :
                    ''
                }
            </div>
        </>
    )
}

export default Author;