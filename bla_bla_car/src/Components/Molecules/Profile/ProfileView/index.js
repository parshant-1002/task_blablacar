import React, { useEffect, useState } from 'react'
import CustomLinkListCreator from '../../../Atoms/CustomLinkListCreator'
import Linkto from '../../../Atoms/LinkTo'
import "../styles.css"
import PathTo from '../../../Atoms/PathTo'
import EditPersonalDetails from './EditPersonalDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicleData, gettingProfilePic } from '../../../../Redux/Actions'

export default function NameAndProfilePicView({setShowEditPersonalDetails=()=>{},setShowMiniBio=()=>{}}) {
    
    const userData = JSON.parse(localStorage.getItem(("CurrentUser")))
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(gettingProfilePic({}))
      dispatch(getVehicleData({}))
    },[])
   const profilePic=useSelector(state=>state)
    console.log(profilePic,"fcgxfc")
    const handleSelect = () => { }
    return (
        <div className='profile'>
            <div className='profileMain'>
                <CustomLinkListCreator pic={true} profileViewLink={true} linkText={userData?.first_name} handleSelect={handleSelect}  profilePic={profilePic?.profilePicReducer}/>
                <Linkto linkText='Add profile picture' route="/dashboard/profile/picture" />
                <PathTo linkText='Edit Personal Details' picNeeded={false} setShow={setShowEditPersonalDetails} />
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>Verify Your Profile</h1>
                <Linkto linkText={`Confirm email ${userData?.email}`} />
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>About You</h1>
                <PathTo linkText='Add a mini bio'  setShow={setShowMiniBio}/>
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>Vehicles</h1>
                
                <Linkto linkText='Add vehicle' route="/dashboard/profile/vehicle/add"/>
            </div>
          
        </div>

    )
}
