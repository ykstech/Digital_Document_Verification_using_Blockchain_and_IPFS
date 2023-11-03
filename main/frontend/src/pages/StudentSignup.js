import React from "react";
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import '../styles/StudentSignup.css'
import Card from 'react-bootstrap/Card';


const StudentSignup = () => {
    return (
        <>
            <div className="container1">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <h5 className="card-title my-4">Sign Up</h5>
                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Metamask Address"
                                />
                            </div>
                            <span>
                                <Link to="/StudentLogin" className="btn btn-dark mx-4 ">
                                    Register
                                </Link>
                            
                                {/* <Link to="/StudentLogin" className="btn btn-dark mx-10">
                                    Login
                                </Link>  */}
                              </span>
                              

                        </form>
                      
                          
                    </div>
                    
                </div>
                 
            </div>
            </div>
        </>

    )
}

export default StudentSignup;
