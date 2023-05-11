import React, { useEffect, useState } from 'react'
import Header from '../../Atoms/Header'
import { useDispatch } from 'react-redux'
import { getPublishRides } from '../../../Redux/Actions'
import ValidationText from '../../Atoms/ValidationText'
import "./styles.css"
export default function YourRides() {
    const [ride, setRide] = useState([])
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const successGetRides = (res) => {
        setRide(res)
        console.log(res )

    }
    const failedGetRides = (res) => {
        setError(res)
    }
    useEffect(() => {

        dispatch(getPublishRides(successGetRides, failedGetRides))

    }, [])
    return (
        <div>

            <Header heading={"Your Rides"} />
            <div className='section-content'>

            {ride?.map(val => {
                return (
                    <div className='RidesData'>
                        <div>
                            <label className='rideDate'>{val?.date}</label>,
                            <label className='rideTime'>{val?.time.split("T")[1].split(".")[0].split(":")[0]+":"+val?.time.split("T")[1].split(".")[0].split(":")[1]}</label>
                            
                        </div>
                        <div>

                          <label className='location'>{val?.source}</label>  
                        </div>
                        <div>
                        <label className='location'>{val?.destination}</label>  
                     
                        </div>
                    </div>)
            })}
            </div>

            <ValidationText message={error} />
        </div>

    )
}
