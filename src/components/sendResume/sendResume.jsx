import React, { useState } from 'react';
import axios from 'axios'


export default function SendResume(){
    const [mail, setMail] = useState({})

    const setmail = (e) => {
        setMail({mail: e.target.value})
    }

    const sendmail = async (e) =>{
        e.preventDefault()
            try{ const check = await axios.post('http://localhost:3004', mail)
            }
            catch(error){
                 console.log(error)
             }

    }

    return (
        <div>
            <form onSubmit={sendmail}>
                <input onChange={setmail}/>
                <button>enviar</button>
            </form>
        </div>
    )
}