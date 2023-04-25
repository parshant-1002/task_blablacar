import React from 'react'
import "./styles.css"
export default function Header({heading}) {
  return (
    <div>
            <h1 className='heading'>{heading}</h1>
    </div>
  )
}
