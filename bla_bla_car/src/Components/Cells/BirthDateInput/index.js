import React, { useRef, useState } from 'react'
import Header from '../../Atoms/Header'
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import { useNavigate } from 'react-router-dom'
import { STRINGS } from '../../../Shared/Constants'

export default function BirthDateInput() {
    const [date, setDate] = useState()
  
    const navigate=useNavigate()
    
    const handleSubmit = () => { 
navigate("/register/gender")
     
       }
  return (
    <>
    <Header heading={STRINGS?.BIRTHDATE_HEADING} />
  <div className='section'>
      <CustomInput type="date" state={date} setState={setDate}  />
  </div>
  <ContinueButton handleSubmit={handleSubmit} />
</>
  )
}
