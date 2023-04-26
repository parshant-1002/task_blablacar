import React from 'react'
import Header from '../../Components/Atoms/Header'
import { Link } from 'react-router-dom'
import rightArrow from "../../assets/rightArrow.svg"
export default function Login() {
  return (
    <div className="section-content">
    <Header heading={"log in"}></Header>
    <ul className="links" >

      <li className="linksList">

        <Link className="linkToEmailInput" to={"email"}><span className="linkText">
          Continue with email
        </span>
          <span className="linkIcon">
           <img src={rightArrow} alt=""></img>
          </span>
        </Link>
      </li>
    </ul>
    <div className="loginRedirectDiv">

      <p className="loginRedirect"> Not a member yet? </p>
      <Link className="loginLink" to={"/register"}>Sign up</Link>
    </div>
  </div>
  )
}
