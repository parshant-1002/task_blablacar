import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import ContinueButton from '../../Atoms/ContinueButton'
import "./styles.css"
import { useDispatch, useSelector } from 'react-redux'
import { uploadProfilePic } from '../../../Redux/Actions'
import { useNavigate } from 'react-router-dom'
export default function AddOrEditProfilePic() {
    const [image,setImage]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=()=>{
      const formData = new FormData();
      formData.append("image", image);
      console.log(formData,"formData")
    dispatch(uploadProfilePic(formData))

      navigate("/dashboard/profile/menu")
     
    }
  return (
    <div>
        
        <div>
            <Header heading="Don't wear sunglasses, look straight ahead and make sure you're alone."></Header>
            <div className='continueButtonDiv'>
                <input id="profilePicInput" type="file" name="image" className='inputProfilePicture'  onChange={(e)=>{setImage(e.target.files[0])}}></input>
            <label  className='continueButton' onClick={handleSubmit}>Choose a Picture</label>
        </div>
       
        </div>
    </div>
  )
}
