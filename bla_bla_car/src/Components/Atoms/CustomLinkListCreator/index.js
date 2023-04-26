import React from 'react'
import { Link } from 'react-router-dom'

import { Images } from '../../../Shared/Images'
export default function CustomLinkListCreator({ route, linkText}) {
  return (
    <>
    <ul className="links" >
        <li  className="linksList">
            <Link className="linkToEmailInput" to={route}>
                <span className="linkText">
                    {linkText}
                </span>
                <span className="linkIcon">
                    <img src={Images.rightArrow} alt=""></img>
                </span>
            </Link>
        </li>
    </ul>
</>
  )
}
