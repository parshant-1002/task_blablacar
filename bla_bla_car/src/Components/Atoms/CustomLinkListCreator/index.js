import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./styles.css"
import { Images } from '../../../Shared/Images'

import { LOCALSTORAGE_KEY_NAME } from '../../../Shared/Constants'
export default function CustomLinkListCreator({profileViewLink=false, pic=false, route, linkText,setDropDownListShow=()=>{} ,setDropDownIconPosition=()=>{},handleSelect=()=>{}}) {

   

    const handleClick=()=>{
    handleSelect(linkText)
    if(linkText==="Logout"){
        localStorage.clear(LOCALSTORAGE_KEY_NAME)
           }
}
// 

    return (
    <>
    <ul className={!profileViewLink?`links`:`profilelinks`} onClick={()=>{handleClick()}} >
        <li  className={!profileViewLink?`linksList`:`profilelinksList`} onClick={()=>{setDropDownListShow(false)
        setDropDownIconPosition("dropDownIconDown")}}>
            <Link className={!profileViewLink?`linkTo`:`profilelinkTo`} to={route}>
                <span className={!profileViewLink?`linkText`:`profilelinkText`}>
                    {linkText}
                </span>
               { pic&&<div className="profilePicDiv">
                    <img className='profilePic' src={Images.profile} alt=""></img>
                </div>}
                <span className="linkIcon">
                    <img src={Images.rightArrow} alt=""></img>
                </span>
            </Link>
           
        </li>
    </ul>
</>
  )
}
