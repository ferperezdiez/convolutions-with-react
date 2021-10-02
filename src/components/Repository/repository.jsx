import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './repository.css'

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
        <>
        <div className="repositoryLink">
            <a href="https://github.com/ferperezdiez/convolutions-with-react" 
                className="btn btn-primary btn-lg repoButton">repository</a>
        </div>
        <div className="repositoryContainer">
            <label className="form-label repositoryLabel blockquote text-center" >Si tienes alguna sugerencia sobre el código y quieres compartila 
                conmigo, te agradeceré mucho si me lo comentas aquí abajo, ya que me ayuda
                a mejorar!
            </label>
                <form className="mb-3 justify" onSubmit={onSubmit}>
                    <label className="form-label labelFormRepo margin">Puedes ingresar tu correo aquí(opcional)</label>
                    <input className="form-control" name="mail" value={suggestion.mail}
                         onChange={onChange}  type="text" />
                    <label className="form-label margin">Puedes ingresar tu comentario aquí</label>      
                    <textarea className="form-control" name="text" value={suggestion.text}
                         onChange={onChange}/>
                    <button className="btn btn-secondary reposirySend">send</button>
                </form>
        </div>
            <Link to='/' className="repositoryLink2">
                <buttom className="btn btn-primary repoBack margin" >volver</buttom>
            </Link>
        </>
    )
}