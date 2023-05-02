import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(undefined);
    const handleChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        // Email validation with regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(value));
    }
    return (
        <div>
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
    );
}
export default App;