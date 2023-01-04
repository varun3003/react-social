import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">VSocial</h3>
                    <span className="loginDesc">Connect with friends and the world.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Repeat Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login to account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
