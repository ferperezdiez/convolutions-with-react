import React, { useState } from 'react';
import axios from 'axios'
import './sendResume.css'
import { Link } from 'react-router-dom';


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
                <h5 className="h5Resume">Would you like to receive my resume? </h5>
                <h5>Please, enter your email address below</h5>
                <form className="input-group mb-3 form" onSubmit={sendmail}>
                    <input className="form-control" onChange={setmail}/>
                    <button className="btn btn-primary">SEND</button>
                </form>
                    <Link to='/'>
                        <button className="btn btn-primary">BACK</button>
                    </Link>
            </div>
        </div>
        )
}