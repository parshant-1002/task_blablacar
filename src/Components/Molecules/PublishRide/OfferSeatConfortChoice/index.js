import React, { useState } from 'react'
import CustomChoiceSelector from '../../../Cells/CustomChoiceSelector'
import { useDispatch } from 'react-redux'
import { needMiddleSeatEmpty } from '../../../../Redux/Actions/PublishRideAction'

export default function OfferSeatConfortChoice() {
    const choiceArray=["Yes,sure!","No,I will sequeeze in 3"]
    const dispatch=useDispatch()
    
     const handleSelect=(selectedText)=>{
        if(selectedText===choiceArray[0]){
    dispatch(needMiddleSeatEmpty("Yes"))
     }
     else{
        dispatch(needMiddleSeatEmpty("No"))
     }}
  return (
    <div >
        
        <CustomChoiceSelector heading="Think comfort, keep the middle seat empty!" choiceArray={choiceArray} route="/offer-seats/seats" handleSelect={handleSelect}/>
    </div>
  )
}
