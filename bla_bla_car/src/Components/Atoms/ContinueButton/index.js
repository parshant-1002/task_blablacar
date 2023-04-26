import React from 'react'
import "./styles.css"
export default function ContinueButton({ handleSubmit }) {
    return (
        <div className='continueButtonDiv'>
            <button className='continueButton' onClick={handleSubmit}>Continue</button>
        </div>
    )
}
