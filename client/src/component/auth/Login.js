import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { registerHandleAction } from '../../actions/auth'

function Login() {
    // Switch Tab ( Login / Register )
    const [activeTab, setActiveTab] = useState('login');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // For Email Validation
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(undefined);
    const handleChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        // Email validation with regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(value));
    }

    // For Password Validation
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("")
    const [containsUppercase, setContainsUppercase] = React.useState(false);
    const [containsNumber, setContainsNumber] = React.useState(false);
    const [containsSpecialChar, setContainsSpecialChar] = React.useState(false);
    const [length, setLength] = React.useState(false)

    function passwordHandle(e) {
        const newValue = e.target.value;
        setPassword(newValue);
        // Check if the string contains an uppercase letter
        if (/[A-Z]/.test(newValue)) {
            setContainsUppercase(true);
        } else {
            setContainsUppercase(false);
        }
        // Check if the string contains a number
        if (/\d/.test(newValue)) {
            setContainsNumber(true);
        } else {
            setContainsNumber(false);
        }
        // Check if the string contains a special character
        if (/[^a-zA-Z0-9]/.test(newValue)) {
            setContainsSpecialChar(true);
        } else {
            setContainsSpecialChar(false);
        }

        // Check if the length of a string is larger than 8 or not
        if (newValue.length >= 8) {
            setLength(true)
        } else {
            setLength(false)
        }
    }

    // For Login Password
    const [loginPassword, setLoginPassword] = React.useState('')

    function registerHandle(e) {
        e.preventDefault()

        password == password2 ? (
            registerHandleAction({
                email : email,
                password : password
            })
        ) : (
            console.log("No")
        )
    }

    return (
        <div>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <ul className="nav nav-tabs card-header-tabs">
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link px-2 ${activeTab === 'login' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('login')}
                                                >
                                                    Login
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link px-2 ${activeTab === 'register' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('register')}
                                                >
                                                    Register
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {activeTab === 'login' && (
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address</label>
                                                    <input type="email" value={email} onChange={handleChange} className='form-control' />
                                                    {
                                                        isValidEmail == undefined ? "" : (
                                                            isValidEmail == true ? (
                                                                <small className='text-success'>
                                                                    <FontAwesomeIcon icon={faCheck} />&nbsp;
                                                                    Valid Email Address
                                                                </small>
                                                            ) : (
                                                                <small className='text-danger'>
                                                                    <FontAwesomeIcon icon={faTimes} />&nbsp;
                                                                    Invalid Email Address
                                                                </small>
                                                            )
                                                        )
                                                    }
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password"
                                                        className="form-control"
                                                        value={loginPassword}
                                                        onChange={(e) => {
                                                            setLoginPassword(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                                <button type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Login
                                                </button>
                                            </form>
                                        )}
                                        {activeTab === 'register' && (
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address</label>
                                                    <input type="email" value={email} onChange={handleChange} className='form-control' />
                                                    {
                                                        isValidEmail == undefined ? "" : (
                                                            isValidEmail == true ? (
                                                                <small className='text-success'>
                                                                    <FontAwesomeIcon icon={faCheck} />&nbsp;
                                                                    Valid Email Address
                                                                </small>
                                                            ) : (
                                                                <small className='text-danger'>
                                                                    <FontAwesomeIcon icon={faTimes} />&nbsp;
                                                                    Invalid Email Address
                                                                </small>
                                                            )
                                                        )
                                                    }
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" value={password} onChange={passwordHandle} className="form-control mb-2" />
                                                    {containsUppercase ? (
                                                        <small className="text-success mb-2 d-block">
                                                            <FontAwesomeIcon icon={faCheck} />&nbsp;
                                                            Uppercase letter
                                                        </small>
                                                    ) : (
                                                        <small className="text-danger mb-2 d-block">
                                                            <FontAwesomeIcon icon={faTimes} />&nbsp;
                                                            Uppercase letter
                                                        </small>
                                                    )}
                                                    {containsNumber ? (
                                                        <small className="text-success mb-2 d-block">
                                                            <FontAwesomeIcon icon={faCheck} />&nbsp;
                                                            Number
                                                        </small>
                                                    ) : (
                                                        <small className="text-danger mb-2 d-block">
                                                            <FontAwesomeIcon icon={faTimes} />&nbsp;
                                                            Number
                                                        </small>
                                                    )}
                                                    {containsSpecialChar ? (
                                                        <small className="text-success mb-2 d-block">
                                                            <FontAwesomeIcon icon={faCheck} />&nbsp;
                                                            Special character
                                                        </small>
                                                    ) : (
                                                        <small className="text-danger mb-2 d-block">
                                                            <FontAwesomeIcon icon={faTimes} />&nbsp;
                                                            Special character
                                                        </small>
                                                    )}
                                                    {length ? (
                                                        <small className="text-success mb-2 d-block">
                                                            <FontAwesomeIcon icon={faCheck} />&nbsp;
                                                            Length larger than 8
                                                        </small>
                                                    ) : (
                                                        <small className="text-danger mb-2 d-block">
                                                            <FontAwesomeIcon icon={faTimes} />&nbsp;
                                                            Length larger than 8
                                                        </small>
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                    <input type="password"
                                                        className="form-control"
                                                        value={password2}
                                                        onChange={(e) => {
                                                            setPassword2(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                                <button type="button"
                                                    className="btn btn-primary"
                                                    onClick={registerHandle}
                                                >
                                                    Register
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
