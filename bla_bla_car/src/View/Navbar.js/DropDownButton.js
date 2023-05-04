import React from 'react'
import { Images } from '../../Shared/Images'


export default function NavContent({handleDropDownIconPosition=()=>{},dropDownIconPosition}) {
  const userData=JSON.parse(localStorage.getItem(("CurrentUser")))

  return (
    <div className='navContent'>
    <button className='navDropDown' onClick={() => { handleDropDownIconPosition() }}>
    {userData&& <label className='userName'>{userData?.first_name}</label>}
        <div className='profileOptions'>
            <img className='profileImg' src={Images?.profile} alt=""></img>
        </div>
        <img className={dropDownIconPosition} src={Images?.upsideArrow} alt="" ></img>
    </button>
</div>
  )
}
