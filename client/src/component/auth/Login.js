import React, { useState } from 'react'
import PasswordValidate from '../validation/Password'
import EmailValidate from '../validation/Email'

function Login() {
    const [activeTab, setActiveTab] = useState('login');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(undefined)

    function handleChange(e) {
        const newEmail = e.target.value
        setEmail(newEmail)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        setIsValidEmail(emailRegex.test(newEmail))
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
                                                    className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('login')}
                                                >
                                                    Login
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
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
                                                    <EmailValidate />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" className="form-control" id="password" />
                                                </div>
                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>
                                            </form>
                                        )}
                                        {activeTab === 'register' && (
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address</label>
                                                    <EmailValidate />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <PasswordValidate />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                    <input type="password" className="form-control" id="confirmPassword" />
                                                </div>
                                                <button type="button" className="btn btn-primary">
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
