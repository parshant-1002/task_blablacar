import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import "./styles.css"
import CustomInput from '../../Atoms/CustomInput'
import { useNavigate } from 'react-router-dom'
import ContinueButton from '../../Atoms/ContinueButton'
export default function PasswordInput() {
    const [password, setPassword] = useState()
    const navigate=useNavigate()
    const handleSubmit = () => { navigate("/phone/fill")}
  return (
    <div className='section-content'>
     <Header heading={"Define your password"}/>
     <div className='passwordFillingMessageDiv'>
  <span className='passwordFillingMessage'>It must have at least 8 characters, 1 letter, 1 number and 1 special character.</span>
     </div>
     <CustomInput type="password" state={password} setState={setPassword} placeHolder='password' />
     <ContinueButton handleSubmit={handleSubmit}/>
    </div>
  )
}
