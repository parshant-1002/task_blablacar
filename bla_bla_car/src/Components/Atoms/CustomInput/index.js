import React from 'react'
import "./styles.css"
export default function CustomInput({type="text",state="",setState=()=>{},placeHolder="" }) {
  return (
    <div className='section-data'>
    <div className='email'>
      <input className='emailInput' type={type} placeholder={placeHolder} value={state} onChange={(e) => { setState(e.target.value) }} /><br />
    </div>
  </div>
  )
}
