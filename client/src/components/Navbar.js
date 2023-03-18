import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../action/userActions';


export default function Navbar() {
    const cartstate = useSelector(state => state.addToCartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const dispatch = useDispatch()

    //const currentUser = userstate
    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 bg-white rounded">
                <div className='container-fluidit'>
                    <a className="navbar-brand" href="/">
                        Foodshop
                    </a>
                </div>
                <div className="navbar-collapse" id="navbarNav">
                    <div className="d-flex justify-content-end"> <div className="mr-auto p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        <div className="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        <div className="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        <div className="d-flex justify-content-end"> <div className="mr-auto p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                            <div className="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                            <div className="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        </div>
                        <div className="d-flex justify-content-end"> <div className="mr-auto p-16">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                            <div className="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                            <div className="p-16">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        </div>
                        <ul className="navbar-nav mr p-2">

                            {currentUser ? (

                                <li className="nav-item">
                                    <a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;{currentUser.name}&nbsp;&nbsp;&nbsp;&nbsp;
                                    </a>
                                    <i className="fa fa-sign-out fa-2x mt-1 " aria-hidden="true" onClick={() => { dispatch(logoutUser()) }}></i>
                                </li>) : (
                                <li className="nav-item">
                                    <a className="nav-link text-center" href="/login">
                                        Login
                                    </a>
                                </li>
                            )}
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                    Cart&nbsp;{cartstate.cartItems.length}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}