import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVehicleData } from '../../../../../Redux/Actions'

export default function EditOrDeleteVehicle() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getVehicleData({}))
       
        
    },[])
    const {id}=useParams()
    const vehicleData=useSelector(state=>state?.vehicleDataReducer)
    console.log(Object.values(vehicleData).find(val=>val?.id==id))
  return (
    <div></div>
  )
}
