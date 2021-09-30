import React, { useState } from 'react';
import axios from 'axios'
import './sendResume.css'


export default function SendResume(){
    const [mail, setMail] = useState({})

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
                <h5>Ingresa tu email para recibir mi CV</h5>
                <form className="input-group mb-3" onSubmit={sendmail}>
                    <input className="form-control" onChange={setmail}/>
                    <button className="btn btn-primary">enviar</button>
                </form>
            </div>
        </div>
        )
}