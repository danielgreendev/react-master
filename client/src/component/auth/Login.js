import React, { useState } from 'react'

function Login() {
    const [activeTab, setActiveTab] = useState('login');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Open modal
            </button>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

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
                                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                                    <small id="emailHelp" className="form-text text-muted">
                                                        We'll never share your email with anyone else.
                                                    </small>
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
                                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                                    <small id="emailHelp" className="form-text text-muted">
                                                        We'll never share your email with anyone else.
                                                    </small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" className="form-control" id="password" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                    <input type="password" className="form-control" id="confirmPassword" />
                                                </div>
                                                <button type="submit" className="btn btn-primary">
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
