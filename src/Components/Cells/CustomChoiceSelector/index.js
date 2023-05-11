import React from 'react'
import Header from '../../Atoms/Header'
import CustomLinkListCreator from '../../Atoms/CustomLinkListCreator'

export default function CustomChoiceSelector({heading,choiceArray=[],route}) {
    const handleSelect=()=>{

    }
  return (
    <div>
        <Header heading={heading}/>
        <div className='section-content'>

        {choiceArray?.map(val=><CustomLinkListCreator linkText={val} handleSelect={handleSelect} route={route}/>)}
        </div>
    </div>
  )
}
