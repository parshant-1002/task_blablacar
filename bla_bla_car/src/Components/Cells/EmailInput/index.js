import React, { useState } from 'react'
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import Header from '../../Atoms/Header'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
export default function EmailInput() {
    const [email, setEmail] = useState()
    const navigate=useNavigate()
    const handleSubmit = () => { 

     navigate("/register/name")
    }
    return (
        <>
              <Header heading={"What is your email?"} />
            <div className='section'>
                <CustomInput state={email} setState={setEmail} placeHolder="email"/>
            </div>
            <ContinueButton handleSubmit={handleSubmit} />
        </>
    )
}
