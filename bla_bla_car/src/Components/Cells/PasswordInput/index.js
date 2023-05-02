import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import "./styles.css"
import CustomInput from '../../Atoms/CustomInput'
import { useNavigate } from 'react-router-dom'
import ContinueButton from '../../Atoms/ContinueButton'
import { STRINGS, VALIDATION_MESSAGES } from '../../../Shared/Constants'
import { isValidPassword } from '../../../Shared/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { registerData } from '../../../Redux/Actions'
export default function PasswordInput() {
  const dispatch=useDispatch()
  const registeredData=useSelector(state=>state)
    const [password, setPassword] = useState("")
    const [validationMessage, setValidationMessage] = useState("")
   
    const navigate=useNavigate()
    const handleSubmit = () => {
      if (!password.trim()) {
        setValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.EMPTY)
    }
    else if (!isValidPassword.test(password)) {
        setValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.NOT_VALID)
    }
    else {
    
      dispatch(registerData?.password(password))
  
      dispatch(registerData?.signup({...registeredData?.registerReducer,password:password}))
      navigate("/")}
    }
  return (
    <div className='section-content'>
     <Header heading={STRINGS?.PASSWORD_HEADING}></Header>
     <div className='passwordFillingMessageDiv'>
  <span className='passwordFillingMessage'>It must have at least 8 characters, 1 letter, 1 number and 1 special character.</span>
     </div>
     <CustomInput type="password" state={password} setState={setPassword} placeHolder='password' validationMessage={validationMessage} setValidationMessage={setValidationMessage}/>
     <label className='validationMessage'>{validationMessage}</label>
     <ContinueButton handleSubmit={handleSubmit}/>
    </div>
  )
}
