import React, { useState } from 'react'
import "./styles.css"
import { Images } from '../../Shared/Images'
import { useLocation, useNavigate } from 'react-router-dom'
import DropDownListViewer from '../../Components/Atoms/DropDownListViewer'
import NavContent from './NavContent'
export default function Navbar() {
    const navigate = useNavigate()
    const currentPath = useLocation()
    const [dropDownIconPosition, setDropDownIconPosition] = useState("dropDownIconDown")
    const [dropDownListShow, setDropDownListShow] = useState(false)
    const dropDownListData = [{ linkText: "Log in ", route: "/login" }, { linkText: "Sign up", route: "/register" }]
    const handleDropDownIconPosition = () => {
        if (dropDownIconPosition === "dropDownIconDown") {
            setDropDownIconPosition("dropDownIconUp")
            setDropDownListShow(true)
        }
        else {
            setDropDownIconPosition("dropDownIconDown")
            setDropDownListShow(false)
        }
    }
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='headerData'>
                    <span className='Logo'>
                        <img src={Images.blablacarLogo} alt="BlaBlaCar" onClick={() => { navigate("/") }}></img>
                    </span>
                </div>
                <div className='centerContent'></div>
                {!currentPath?.pathname?.includes("register") &&<NavContent handleDropDownIconPosition={handleDropDownIconPosition} dropDownIconPosition={dropDownIconPosition}/>}
                {dropDownListShow && <DropDownListViewer dropDownListData={dropDownListData} setDropDownListShow={setDropDownListShow} setDropDownIconPosition={setDropDownIconPosition} />}
            </div>
        </div>
    )
}
