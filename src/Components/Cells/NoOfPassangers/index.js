import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import { Images } from '../../../Shared/Images'
import "./styles.css"
import ContinueButton from '../../Atoms/ContinueButton'
import { BUTTONTEXT } from '../../../Shared/Constants'
export default function NoOfPassangers() {
    const [noOfPassangers,setNoOfPassangers]=useState(0)
  return (
    <div>
        <Header heading="So how many BlaBlaCar passengers can you take?"/>
        <div className='section-content'>

        <div className='Counter'>

        <img className='additionIcon' src={Images.substractionIcon} alt="" onClick={()=>{if(noOfPassangers>0)setNoOfPassangers(x=>x-1)}} />
        <label className='counterText'>{noOfPassangers}</label>
        <img className='additionIcon' src={Images.additionIcon} alt="" onClick={()=>{if(noOfPassangers<4)setNoOfPassangers(x=>x+1)}}/>
        </div>
        <ContinueButton ButtonText={BUTTONTEXT.CONTINUE}/>
        </div>

    </div>
  )
}
