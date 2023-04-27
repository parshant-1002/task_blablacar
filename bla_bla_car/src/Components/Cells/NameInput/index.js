import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
import { STRINGS } from '../../../Shared/Constants'
export default function NameInput() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const navigate=useNavigate()
    const handleSubmit = () => { navigate("/register/birthDate")}
  return (
    <>
    <Header heading={STRINGS?.NAME_HEADING} />
  <div className='section'>
      <CustomInput state={firstName} setState={setFirstName} placeHolder="firstName" />
      <CustomInput state={lastName} setState={setLastName} placeHolder="lastName"/>
  </div>
  <ContinueButton handleSubmit={handleSubmit} />
</>
  )
}
