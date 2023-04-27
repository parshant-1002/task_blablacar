import React from 'react'
import Header from '../../Atoms/Header'
import "./styles.css"
import CustomLinkListCreator from '../../Atoms/CustomLinkListCreator'
import { STRINGS } from '../../../Shared/Constants'

export default function NamePrefixSelector() {
    const namePrefixes=["Miss/Madam","Sir","I'd rather not say"]
    return (
        <div className='section-content'>
        <Header heading={STRINGS?.GENDER_SELECT_HEADING}/>
        {namePrefixes.map((val,i)=><CustomLinkListCreator route="/register/password" linkText={val}/>)}
        </div>
    )
}
