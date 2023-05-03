import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import ContinueButton from '../../Atoms/ContinueButton'
import "./styles.css"
export default function AddOrEditProfilePic() {
    const [image,setImage]=useState()
    const handleSubmit=()=>{
    
    }
  return (
    <div>
        
        <div>
            <Header heading="Don't wear sunglasses, look straight ahead and make sure you're alone."></Header>
            <div className='continueButtonDiv'>
                <input id="profilePicInput" type="file" className='inputProfilePicture'  onChange={(e)=>{setImage(e.target.files[0])}}></input>
            <label htmlFor='profilePicInput' className='continueButton' onClick={handleSubmit}>Choose a Picture</label>
        </div>
       
        </div>
    </div>
  )
}
