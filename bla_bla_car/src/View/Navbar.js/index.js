import React from 'react'
import "./styles.css"

import { Images } from '../../Shared/Images'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate=useNavigate()
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='headerData'>
                    <span className='Logo'>
                  <img src={Images.blablacarLogo} alt="BlaBlaCar" onClick={()=>{navigate("/")}}></img>
                    </span>

                </div>
            </div>
        </div>
    )
}
