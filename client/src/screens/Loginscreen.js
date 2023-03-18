import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../action/userActions";
import { loginfacebook } from "../action/fbuserAction";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export default function Loginscreen() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch()
    
    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }

    }, [])

    function login() {
        const user = { email, password }
        dispatch(loginUser(user))
        alert("You're login.")
    }
   
    const responseFacebook = (response) => {
        const {name, email} = response
        //setname(name)
        //setemail(email)
        const user = {name , email}
        dispatch(loginfacebook(user))
        console.log(user);
      }
    
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
                        Login
                    </h2>
                    <div>
                        <input required type="text" placeholder="email" className="form-control"value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        <input 
                            type="password" 
                            autocomplete="current-password"
                            placeholder="password" 
                            className="form-control" 
                            value={password}
                            required
                            onChange={(e) => { setpassword(e.target.value) }}
                        />

                        <button onClick={login} className="btn mt-3 mb-3">LOGIN</button>
                        <br />
                        <p>Or Login With</p>

                        <div className="social">
                            <div className="socialfb">
                                <FacebookLogin
                                    appId="359002076153863"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook} />

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a style={{ color: 'black' }} href="/register" className="mt-2">Click Here To Register</a>
                </div>

            </div>
        </div>
    )
}