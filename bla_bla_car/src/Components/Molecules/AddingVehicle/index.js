import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import { STRINGS } from '../../../Shared/Constants'
import CustomInput from '../../Atoms/CustomInput'

export default function AddVehicleDetails() {
    const [country,setCountry]=useState()
  return (
    <div>
        <Header heading={STRINGS?.ADDING_VEHICLE_DETAILS}/>
        <div className='section-content'>

        <CustomInput/>
        <CustomInput/>
        </div>
    </div>
  )
}
