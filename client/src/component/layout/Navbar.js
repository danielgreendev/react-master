import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const commonLinks = (
        <React.Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to="/other">
                    Other
                </Link>
            </li>
            <li className="nav-item">
                <div class="dropdown">
                    <button class="btn bg-white" type="button" data-toggle="dropdown" data-target="#dropdownMenu">
                        English
                        <svg width="24" height="24" viewBox="0 0 30 30">
                            <path d="M10 12l4 4 4-4" stroke="black" stroke-width="1" fill="none" />
                        </svg>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                        <a class="dropdown-item" href="#">Language 1</a>
                        <a class="dropdown-item" href="#">Language 2</a>
                        <a class="dropdown-item" href="#">Language 3</a>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            {commonLinks}
            <li className="nav-item">
                <Link className="nav-link" to='/login'>
                    <i className='fa fa-lock'></i>&nbsp;&nbsp;
                    Register / Login
                </Link>
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


