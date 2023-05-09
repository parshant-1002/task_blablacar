import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import { BUTTONTEXT, STRINGS } from '../../../../Shared/Constants'
import CustomInput from '../../../Atoms/CustomInput'
import ContinueButton from '../../../Atoms/ContinueButton'
import MapContainer from '../../Map'
import MapRouteShow from './MapRouteShow'
import { useSelector } from 'react-redux'

export default function SelectRoute() {
  const coordinates = useSelector(state => state?.publishRideReducer)
  const [paths, setPaths] = useState([])

  const handleSubmit = () => { }
  return (
    <div className='pickUpMapContainer'>
      <div className='inputLocationData'>

        <Header heading={STRINGS.SELECT_ROUTE} />
        {paths.map(val =>
          <ul>
            <div>
              {val.duration}
            </div>
            {val.distance}-{val.path}
          </ul>
        )}
        <ContinueButton ButtonText={BUTTONTEXT.CONTINUE} handleSubmit={handleSubmit} />
      </div>
      <div className='mapFrame'>

        <div className='frameContent'>  < MapRouteShow coordinates={coordinates} setPaths={setPaths} /></div>

      </div>
    </div>
  )
}
