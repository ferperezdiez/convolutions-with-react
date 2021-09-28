import React, { useState } from 'react';
import axios from 'axios'


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
        <div>
            <h5>Ingresa tu email para recibir mi CV</h5>
            <form onSubmit={sendmail}>
                <input onChange={setmail}/>
                <button>enviar</button>
            </form>
        </div>
    )
}