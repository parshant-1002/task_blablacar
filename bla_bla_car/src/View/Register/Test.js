import React, { useEffect, useState } from 'react'
import "./styles.css"
import axios from "axios"
import Header from '../../Components/Atoms/Header'
export default function Test() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = () => {
    axios.post("https://b5a2-122-160-165-213.ngrok-free.app/users", {
      "user": {
        email: "sparhanopt2001@gmail.com",

      }
    }).then(res => console.log(res)).catch(val => alert(val, "ll"))
  }



  return (
    <>
      <Header heading={"What is your email?"}/>
      <div className='section'>
        <div className='section-data'>
          <div className='email'>
            <input className='emailInput' type="email" placeholder='Email' value={email} onChange={() => { setEmail(x => x) }} /><br />
          </div>
        </div>
      </div>
      <div className='continueButtonDiv'>
        <button className='continueButton' onClick={handleSubmit}>Continue</button>
      </div>
    </>
  )
}
