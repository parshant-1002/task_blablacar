import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import { STRINGS } from '../../../Shared/Constants'
import ReactDatePicker from 'react-datepicker';
import "./styles.css"
export default function RideTime() {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  return (
    <div>
        <Header heading={STRINGS.ON_WHAT_TIME}/>
        <div>
      <label htmlFor="myDateTimePicker">Select a date and time:</label>
      <ReactDatePicker
        id="myDateTimePicker"
        selected={selectedDateTime}
        value={0}
        onChange={(date) =>setSelectedDateTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={1}
        dateFormat=" h:mm aa"
        
      />
    </div>

    </div>
  )
}
