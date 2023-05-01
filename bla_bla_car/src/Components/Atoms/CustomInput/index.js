import React from 'react'
import "./styles.css"
export default function CustomInput(
  { type = "text",
    state = "",
    setState = () => { },
    placeHolder = "",
    validationMessage = "",
    handleSubmit = () => { },
    setValidationMessage = () => { },
    inputType = "" }) {

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSubmit()
    }
    if (e.code === "Enter" && inputType === "firstName") {
      document?.getElementById("lastName")?.focus()
    }
  }
  const handleChange = (value) => {
    setState(value)
    setValidationMessage("")

  }
  return (
    <div className='section-data'>
      <div className={!validationMessage ? `inputDiv` : `inputDivInvalid`}>
        <input id={inputType} className='Input' onKeyDown={handleKey} type={type} placeholder={placeHolder} value={state} onChange={(e) => { handleChange(e.target.value) }} /><br />
      </div>
    </div>
  )
}
