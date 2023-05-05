import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVehicleData } from '../../../../../Redux/Actions'
import Header from '../../../../Atoms/Header'
import Linkto from '../../../../Atoms/LinkTo'

export default function EditOrDeleteVehicle() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getVehicleData({}))
       
        
    },[])
    const {id}=useParams()
    const vehicleData=useSelector(state=>state?.vehicleDataReducer)
    const vehicle=(Object.values(vehicleData).length&&Object.values(vehicleData)?.find(val=>val?.id==id))
  return (
    <div className='section-content'>
      <Header heading={`Name:${vehicle?.vehicle_name}`}/>
      <div className='FillingMessageDiv'>
                <span className='FillingMessage'>color :{vehicle?.vehicle_color}</span>
            </div>
            <Linkto picNeeded={false} linkText="Edit info" />
            <Linkto  picNeeded={false}  linkText="Delete vehicle" />
     
    </div>
  )
}
