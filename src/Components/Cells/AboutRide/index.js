import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import ContinueButton from '../../Atoms/ContinueButton'
import "./styles.css"
import { useSelector } from 'react-redux'
export default function AboutRide() {
    const [aboutRide,setAboutRide]=useState("")
    const data=useSelector(state=>state?.publishRideReducer)
    console.log(data)
  return (
    <div>
        <Header heading={"Anything to add about your ride?"}/>
        <textarea className='aboutRide' value={aboutRide} onChange={(e)=>setAboutRide(e.target.value)}/>
        <ContinueButton ButtonText='Publish Ride'/>
    </div>
  )
}
