import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const commonLinks = (
        <React.Fragment>
            <li className="nav-item">
                <div class="dropdown">
                    <button class="btn bg-white" type="button" data-toggle="dropdown" data-target="#dropdownMenu">
                        English
                        <svg width="24" height="24" viewBox="0 0 30 30">
                            <path d="M10 12l4 4 4-4" stroke="black" stroke-width="1" fill="none" />
                        </svg>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
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
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
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
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/'>Arabic language</Link>
            </li>

        </React.Fragment>
    );
    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            {commonLinks}
            <li className="nav-item">
                <Link className="nav-link" to='/register'>Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
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


