import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./styles.css"
import { Images } from '../../../Shared/Images'
import { ToastContainer, toast } from 'react-toastify'
import { LOCALSTORAGE_KEY_NAME } from '../../../Shared/Constants'
export default function CustomLinkListCreator({ route, linkText,setDropDownListShow=()=>{} ,setDropDownIconPosition=()=>{},handleSelect=()=>{}}) {

   

    const handleClick=()=>{
    handleSelect(linkText)
    if(linkText==="Logout"){
        localStorage.clear(LOCALSTORAGE_KEY_NAME)
       
    }
}

    return (
    <>
    <ul className="links" onClick={()=>{handleClick()}} >
        <li  className="linksList" onClick={()=>{setDropDownListShow(false)
        setDropDownIconPosition("dropDownIconDown")}}>
            <Link className="linkToEmailInput" to={route}>
                <span className="linkText">
                    {linkText}
                </span>
                <span className="linkIcon">
                    <img src={Images.rightArrow} alt=""></img>
                </span>
            </Link>
           
        </li>
    </ul>
</>
  )
}
