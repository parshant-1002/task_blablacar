import React from 'react'
import CustomChoiceSelector from '../CustomChoiceSelector'

export default function OfferSeatConfortChoice() {
    const choiceArray=["Yes,sure!","No,I will sequeeze in 3"]
    
  return (
    <div >
        
        <CustomChoiceSelector heading="Think comfort, keep the middle seat empty!" choiceArray={choiceArray} route="/offer-seats/seats"/>
    </div>
  )
}
