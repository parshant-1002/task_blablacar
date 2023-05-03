import React, { useState } from 'react'
import ModalComponent from '../../Cells/Modal'
import Header from '../../Atoms/Header'
import "./styles.css"
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import { VALIDATION_MESSAGES } from '../../../Shared/Constants'
import { isValidEmail, isValidName } from '../../../Shared/Utilities'
import DateInput from '../../Atoms/DateInput'
import { useDispatch } from 'react-redux'
export default function EditPersonalDetails({ show, setShow = () => { } }) {
    const userData=JSON.parse(localStorage.getItem("CurrentUser"))
    const [firstName,setFirstName]=useState(userData?.first_name||"")
    const [lastName,setLastName]=useState(userData?.last_name||"")
    const [dob,setDob]=useState(userData?.dob||"")
    const [gender,SetGender]=useState(userData?.title||"")
    const [email,setEmail]=useState(userData?.email||"")
    const [emailValidationMessage,setEmailValidationMessage]=useState("")
    const [validationMessageFirstName, setValidationMessageFirstName] = useState()
    const [validationMessageLastName, setValidationMessageLastName] = useState()
    const dispatch=useDispatch()
   const handleSubmit=()=>{
    if (!email.trim()) {
        setEmailValidationMessage(VALIDATION_MESSAGES?.EMAIL?.EMPTY)
    }
    else if (!isValidEmail.test(email)) {
        setEmailValidationMessage(VALIDATION_MESSAGES?.EMAIL?.NOT_VALID)
    }
    if (!firstName.trim()) {
        setValidationMessageFirstName(VALIDATION_MESSAGES?.FIRST_NAME?.EMPTY)
    }
    if (!lastName.trim()) {
      setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.EMPTY)
  }

    else if (!isValidName.test(firstName)) {
      setValidationMessageFirstName(VALIDATION_MESSAGES?.FIRST_NAME?.NOT_VALID)
    }
    else if (!isValidName.test(lastName)) {
      setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.NOT_VALID)
    }
    else{
      dispatch({email:email,first_name:firstName,last_name:lastName,dob:dob,title:gender})
    }
   }
    return (
        <ModalComponent show={show} setShow={setShow}>
            <Header heading={"Personal details"} />
            <div className='passwordFillingMessageDiv'>
                <span className='passwordFillingMessage'>First Name</span>
            </div>
            <CustomInput state={firstName} setState={setFirstName} validationMessage={validationMessageFirstName} setValidationMessage={setValidationMessageFirstName} placeHolder='first Name'/>
            <label>{validationMessageFirstName}</label>
            <div className='passwordFillingMessageDiv'>
                <span className='passwordFillingMessage'>Last Name</span>
            </div>
            <CustomInput state={lastName} setState={setLastName} validationMessage={validationMessageLastName} setValidationMessage={setValidationMessageLastName} placeHolder='last Name'/>
            <label>{validationMessageLastName}</label>
            <div className='passwordFillingMessageDiv'>
                <span className='passwordFillingMessage'>Gender</span>
            </div>
            <CustomInput state={gender} setState={SetGender}/>
            <div className='passwordFillingMessageDiv'>
                <span className='passwordFillingMessage'>Date of Birth</span>
            </div>
            <DateInput startDate={dob}  setStartDate={setDob}/>
            <div className='passwordFillingMessageDiv'>
                <span className='passwordFillingMessage'>Email Address</span>
            </div>
            <CustomInput state={email} setState={setEmail} validationMessage={emailValidationMessage} setValidationMessage={setEmailValidationMessage} placeHolder='email'/>
            <label>{emailValidationMessage}</label>
            <ContinueButton  ButtonText='Update' handleSubmit={()=>handleSubmit()}/>
        </ModalComponent>
    )
}
