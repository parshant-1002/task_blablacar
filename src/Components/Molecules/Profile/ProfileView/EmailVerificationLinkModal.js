import React, { useState } from 'react'
import ModalComponent from '../../../Cells/Modal'
import Header from '../../../Atoms/Header'
import { STRINGS } from '../../../../Shared/Constants'
import ContinueButton from '../../../Atoms/ContinueButton'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendEmailVerificationLink } from '../../../../Redux/Actions'

export default function EmailVerificationLinkModal({ show, setShow = () => { } }) {
  const userData = JSON.parse(localStorage.getItem(("CurrentUser")))
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [statusSuccessMessage,setStatusSuccessMessage]=useState()
  const [statusFailedMessage,setStatusFailedMessage]=useState()
  const succesSend=(res)=>{
    navigate("/dashboard/profile/menu")
    setStatusSuccessMessage(res)
  }
  const failedSend=(res)=>{
    setStatusFailedMessage(res)
   
  }
  const handleSubmit = () => {
   dispatch(sendEmailVerificationLink({email:userData?.email},succesSend,failedSend))
  }
  return (
    <div>
      <ModalComponent show={show} setShow={setShow}>
        <Header heading={STRINGS?.VERIFY_EMAIL} />

        {statusSuccessMessage?<label className='statusSuccessMessage'>{statusSuccessMessage?.data}</label>:<label className='validationMessage'>{statusFailedMessage?.data}</label>}
        <ContinueButton ButtonText={"Send Verify link"} handleSubmit={handleSubmit} />
      </ModalComponent>
    </div>
  )
}
