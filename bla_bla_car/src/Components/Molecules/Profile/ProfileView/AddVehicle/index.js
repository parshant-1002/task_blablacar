import React, { useState } from 'react'
import Header from '../../../../Atoms/Header'
import { REGEX, STRINGS, VALIDATION_MESSAGES } from '../../../../../Shared/Constants'
import CustomInput from '../../../../Atoms/CustomInput'
import ContinueButton from '../../../../Atoms/ContinueButton'
import ValidationText from '../../../../Atoms/ValidationText'
import { isValidName, isValidNumber, isValidNumberAndText } from '../../../../../Shared/Utilities'
import { useDispatch } from 'react-redux'
import { addVehicleData } from '../../../../../Redux/Actions'

export default function AddVehicleDetails() {
  const [country, setCountry] = useState("")
  const [countryValidationMessage, setCountryValidationMessage] = useState()
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [vehicleNumberValidationMessage, setVehicleNumberValidationMessage] = useState()
  const [vehicleBrand, setVehicleBrand] = useState("")
  const [vehicleBrandValidationMessage, setVehicleBrandValidationMessage] = useState()
  const [vehicleName, setVehicleName] = useState("")
  const [vehicleNameValidationMessage, setVehicleNameValidationMessage] = useState()
  const [vehicleType, setVehicleType] = useState("")
  const [vehicleTypeValidationMessage, setVehicleTypeValidationMessage] = useState()
  const [vehicleColor, setVehicleColor] = useState("")
  const [vehicleColorValidationMessage, setVehicleColorValidationMessage] = useState()
  const [vehicleModelYear, setVehicleModelYear] = useState("")
  const [vehicleModelYearValidationMessage, setVehicleModelYearValidationMessage] = useState()
  const dispatch=useDispatch()
  const handleSubmit = () => {

    !country.trim() && setCountryValidationMessage(VALIDATION_MESSAGES?.COUNTRY?.EMPTY)
    !vehicleNumber.trim() && setVehicleBrandValidationMessage(VALIDATION_MESSAGES?.VEHICLEBRAND?.EMPTY)
    !vehicleBrand.trim() && setVehicleNameValidationMessage(VALIDATION_MESSAGES?.VEHICLENAME?.EMPTY)
    !vehicleName.trim() && setVehicleNumberValidationMessage(VALIDATION_MESSAGES?.VEHICLENUMBER?.EMPTY)
    !vehicleType.trim() && setVehicleTypeValidationMessage(VALIDATION_MESSAGES?.VEHICLETYPE?.EMPTY)
    !vehicleColor.trim() && setVehicleColorValidationMessage(VALIDATION_MESSAGES?.VEHICLECOLOR?.EMPTY)
    !vehicleModelYear.trim() && setVehicleModelYearValidationMessage(VALIDATION_MESSAGES?.VEHICLEMODELYEAR?.EMPTY)
    // !isValidName.test(country) && setCountryValidationMessage(VALIDATION_MESSAGES?.COUNTRY?.NOT_VALID)
    // !isValidName.test(vehicleBrand) && setVehicleBrandValidationMessage(VALIDATION_MESSAGES?.VEHICLEBRAND?.NOT_VALID)
    // !isValidName.test(vehicleType) && setVehicleNameValidationMessage(VALIDATION_MESSAGES?.VEHICLENAME?.NOT_VALID)
    // !isValidName.test(vehicleColor) && setVehicleTypeValidationMessage(VALIDATION_MESSAGES?.VEHICLETYPE?.NOT_VALID)
    // !isValidName.test(vehicleModelYear) && setVehicleColorValidationMessage(VALIDATION_MESSAGES?.VEHICLECOLOR?.NOT_VALID)

    // if (!isValidNumber.test(vehicleModelYear)) {
    //   setVehicleModelYearValidationMessage(VALIDATION_MESSAGES?.VEHICLEMODELYEAR?.NOT_VALID)
    // }
    // else if (!isValidNumberAndText.test(vehicleNumber)) {
    //   setVehicleNumberValidationMessage(VALIDATION_MESSAGES?.VEHICLENUMBER?.NOT_VALID)
    // }
    // else{
  dispatch(addVehicleData({country:country,vehicle_number:vehicleNumber,vehicle_brand : vehicleBrand,vehicle_name: vehicleName,vehicle_type : vehicleType,vehicle_color : vehicleColor,vehicle_model_year : vehicleModelYear}))
    // }
  }
  return (
    <div>
      <Header heading={STRINGS?.ADDING_VEHICLE_DETAILS} />
      <div className='section-content'>
        <CustomInput placeHolder='country' state={country} setState={setCountry} validationMessage={countryValidationMessage} setValidationMessage={setCountryValidationMessage} />
        <ValidationText message={countryValidationMessage} />
        <CustomInput placeHolder='vehicle_number' state={vehicleNumber} setState={setVehicleNumber} validationMessage={vehicleNumberValidationMessage} setValidationMessage={setVehicleNumberValidationMessage} />
        <ValidationText message={vehicleNumberValidationMessage} />
        <CustomInput placeHolder='vehicle_brand' state={vehicleBrand} setState={setVehicleBrand} validationMessage={vehicleBrandValidationMessage} setValidationMessage={setVehicleBrandValidationMessage} />
        <ValidationText message={vehicleBrandValidationMessage} />
        <CustomInput placeHolder='vehicle_name' state={vehicleName} setState={setVehicleName} validationMessage={vehicleNameValidationMessage} setValidationMessage={setVehicleNameValidationMessage} />
        <ValidationText message={vehicleNameValidationMessage} />
        <CustomInput placeHolder='vehicle_type' state={vehicleType} setState={setVehicleType} validationMessage={vehicleTypeValidationMessage} setValidationMessage={setVehicleTypeValidationMessage} />
        <ValidationText message={vehicleTypeValidationMessage} />
        <CustomInput placeHolder='vehicle_color' state={vehicleColor} setState={setVehicleColor} validationMessage={vehicleColorValidationMessage} setValidationMessage={setVehicleColorValidationMessage} />
        <ValidationText message={vehicleColorValidationMessage} />
        <CustomInput placeHolder='vehicle_model_year' state={vehicleModelYear} setState={setVehicleModelYear} validationMessage={vehicleModelYearValidationMessage} setValidationMessage={setVehicleModelYearValidationMessage} />
        <ValidationText message={vehicleModelYearValidationMessage} />
      </div>
      <ContinueButton ButtonText="save" handleSubmit={handleSubmit} />
    </div>
  )
}

