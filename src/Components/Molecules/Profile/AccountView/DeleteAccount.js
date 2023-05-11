import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import ContinueButton from '../../../Atoms/ContinueButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteAccount } from '../../../../Redux/Actions'
import ValidationText from '../../../Atoms/ValidationText'

export default function DeleteAccount() {
    const [errorMessage,setErrorMessage]=useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const successDeleteAccount = () => {
        navigate("/")
        localStorage.clear("token")
        localStorage.clear("CurrentUser")
    }
    const failedDeleteAccount=(res)=>{
        setErrorMessage(res)
    }
    const handleSubmit = () => {
    dispatch(deleteAccount(successDeleteAccount,failedDeleteAccount))
    }
    return (
        <div>
            <Header heading={"Sure to delete your account"} />
            <ValidationText message={errorMessage}/>
            <ContinueButton ButtonText={"Delete Account"} handleSubmit={handleSubmit} />
        </div>
    )
}
