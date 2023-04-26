import React from 'react'
import Header from '../../Atoms/Header'
import "./styles.css"
import CustomLinkListCreator from '../../Atoms/CustomLinkListCreator'

export default function NamePrefixSelector() {
    const namePrefixes=["Miss/Madam","Sir","I'd rather not say"]
    return (
        <div className='section-content'>
        <Header heading={"How would you like to be addressed?"}/>
        {namePrefixes.map((val,i)=><CustomLinkListCreator route="/register/password" linkText={val}/>)}
        </div>
    )
}
