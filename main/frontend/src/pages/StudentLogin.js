import React from "react";
import { Link } from 'react-router-dom';
import '../styles/StudentLogin.css';

const StudentLogin = ()=>{


    return (
        <>
        <div className="container1"> 
         <div className="container d-flex align-items-center justify-content-center ">
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <h5 className="card-title my-4">Student Login </h5>
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
                            <span>
                                <Link to="/" className="btn btn-dark ">
                                    Login
                                </Link>
                            </span>

                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default StudentLogin;

