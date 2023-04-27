import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Register from '../../View/Register'
import EmailInput from '../../Components/Cells/EmailInput'
import Login from '../../View/Login'
import NameInput from '../../Components/Cells/NameInput'
import BirthDateInput from '../../Components/Cells/BirthDateInput'
import NamePrefixSelector from '../../Components/Cells/NamePrefixSelector'
import PasswordInput from '../../Components/Cells/PasswordInput'
import PhoneVerification from '../../Components/Cells/PhoneVerification'
import Home from '../../View/Home'
import Search from '../../Components/Molecules/Search'

export default function PublicRoutes() {
    return (
       
            <Routes>
            <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/register/email" element={<EmailInput/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register/name" element={<NameInput/>}/>
                <Route exact path="/register/birthDate" element={<BirthDateInput/>}/>
                <Route exact path="/register/gender" element={<NamePrefixSelector/>}/>
                <Route exact path="/register/password" element={<PasswordInput/>}/>
                <Route exaxt path={"/phone/fill"} element={<PhoneVerification/>}/>
                <Route exaxt path={"/search-car-sharing"} element={<Search/>}/>
            </Routes>
     
    )
}
