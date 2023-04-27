import React from 'react'
import { Images } from '../../Shared/Images'

export default function NavContent({handleDropDownIconPosition=()=>{},dropDownIconPosition}) {
  return (
    <div className='navContent'>
    <button className='navDropDown' onClick={() => { handleDropDownIconPosition() }}>
        <div className='profileOptions'>
            <img className='profileImg' src={Images?.profile} alt=""></img>
        </div>
        <img className={dropDownIconPosition} src={Images?.upsideArrow} alt="" ></img>
    </button>
</div>
  )
}
