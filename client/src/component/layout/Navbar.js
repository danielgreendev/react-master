import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../auth/Login'

const Navbar = () => {
    const commonLinks = (
        <React.Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to="/other">
                    Other
                </Link>
            </li>
            <li className="nav-item">
                <div className="dropdown">
                    <button className="btn bg-white" type="button" data-toggle="dropdown" data-target="#dropdownMenu">
                        English
                        <svg width="24" height="24" viewBox="0 0 30 30">
                            <path d="M10 12l4 4 4-4" stroke="black" strokeWidth="1" fill="none" />
                        </svg>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                        <a className="dropdown-item" href="#">Language 1</a>
                        <a className="dropdown-item" href="#">Language 2</a>
                        <a className="dropdown-item" href="#">Language 3</a>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            {commonLinks}
            <li className="nav-item">
                <p className="nav-link" data-toggle="modal" data-target="#myModal">
                    <i className='fa fa-lock'></i>&nbsp;&nbsp;
                    Register / Login
                </p>
                <LoginModal />
            </li>
        </ul>
    );

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <Link className='donate-btn' to="/">
                    Donate
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    {guestLinks}
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar


