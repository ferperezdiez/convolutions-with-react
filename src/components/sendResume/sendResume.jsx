import React, { useState } from 'react';
import axios from 'axios'
import './sendResume.css'
import { Link } from 'react-router-dom';


export default function SendResume(){
    const [mail, setMail] = useState({})
    let userLang = navigator.language || navigator.userLanguage; 
    userLang = userLang.split('').splice(0,2).join('')
    const setmail = (e) => {
        setMail({mail: e.target.value})
    }

    const sendmail = async (e) =>{
        e.preventDefault()
            try{ const check = await axios.post('/', mail)
            console.log(check.data)
            window.location.href = "/"
            }
            catch(error){
                 console.log(error)
             }

    }

    return (
        <div className="senmMailContainer">
            <div className="divInput">
                <h5 className="h5Resume">
                    {userLang === 'en' ? 'Would you like to receive my resume?' :
                     'Te gustaría recibir mi CV?'}
                </h5>
                <h5 className="h5Resume" >
                    {userLang === 'en' ? 'Please, enter your email address below, thank you very much!':
                    'Ingresa tu correo electrónico aquí debajo, muchas gracias!'}
                </h5>
                <form className="input-group mb-3 form" onSubmit={sendmail}>
                    <input className="form-control" onChange={setmail}/>
                    <button className="btn btn-primary">
                        { userLang === 'en' ? 'SEND' : 'ENVIAR'}</button>
                </form>
                    <Link to='/'>
                        <button className="btn btn-primary">
                            { userLang === 'en' ? 'BACK' : 'VOLVER'}</button>
                    </Link>
            </div>
            
        </div>
        )
}