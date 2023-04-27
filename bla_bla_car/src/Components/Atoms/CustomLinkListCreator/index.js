import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
import { Images } from '../../../Shared/Images'
export default function CustomLinkListCreator({ route, linkText,setDropDownListShow=()=>{} ,setDropDownIconPosition=()=>{}}) {
  return (
    <>
    <ul className="links" >
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
