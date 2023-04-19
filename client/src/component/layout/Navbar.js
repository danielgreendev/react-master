import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-transparent px-5">
            <Link to="/" className='navbar-brand'>
                <h1>
                    <i className='fa fa-home'></i>&nbsp;
                    Project
                </h1>
            </Link>
            {/* <div className='collapse navbar-collapse'> */}
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/login">
                        <i className='fa fa-lock'></i>&nbsp;
                        Login / Register
                    </Link>
                </li>
            </ul>

            {/* </div> */}
        </nav>
    )
}

export default Navbar
