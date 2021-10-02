import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Repository(){

    const [suggestion, setSuggestion] = useState({
        mail:'',
        text:''
    })

    const onChange = (e) => {
        setSuggestion({...suggestion, [e.target.name]: e.target.value })
        
    }

    const onSubmit = async (e) => {
        try {e.preventDefault()
        const result = await axios.post('/', suggestion)
        console.log(result)
        alert('Gracias!')
        setSuggestion({
            mail:'',
            text:''
        })
    
    }
        catch(err){
            console.log(err)
        }
    }


    return(
        <div>
            <div>
                <a href="https://github.com/ferperezdiez/convolutions-with-react" 
                    className="btn btn-primary">repository</a>
            </div>
            <label>Si tienes alguna sugerencia sobre el código y quuieres compartilo 
                conmigo te agradeceré mucho si me lo comentas aquí abajo, ya que me ayuda
                a mejorar!
            </label>
            <div>
                <form className="formRepo" onSubmit={onSubmit}>
                    <input name="mail" value={suggestion.mail} onChange={onChange}  type="text" />
                    <textarea name="text" value={suggestion.text} onChange={onChange}/>
                    <button>send</button>
                </form>
            </div>
            <Link to='/'>
                <buttom className="btn btn-primary" >volver</buttom>
            </Link>
        </div>
    )
}