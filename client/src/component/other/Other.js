import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
function App() {
    const [text, setText] = React.useState("");
    const [containsUppercase, setContainsUppercase] = React.useState(false);
    const [containsNumber, setContainsNumber] = React.useState(false);
    const [containsSpecialChar, setContainsSpecialChar] = React.useState(false);
    const [length, setLength] = React.useState(false)

    function handleChange(e) {
        const newValue = e.target.value;
        setText(newValue);
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
    return (
        <div className="container">
            <label>
                Enter text:
            </label>
            <input type="text" value={text} onChange={handleChange} className="form-control mb-2" />
            {containsUppercase ? (
                <span className="text-success mb-2 d-block">
                    <FontAwesomeIcon icon={faCheck} />
                    Contains uppercase letter
                </span>
            ) : (
                <span className="text-danger mb-2 d-block">
                    <FontAwesomeIcon icon={faTimes} />
                    Does not contain uppercase letter
                </span>
            )}
            {containsNumber ? (
                <span className="text-success mb-2 d-block">
                    <FontAwesomeIcon icon={faCheck} />
                    Contains number
                </span>
            ) : (
                <span className="text-danger mb-2 d-block">
                    <FontAwesomeIcon icon={faTimes} />
                    Does not contain number
                </span>
            )}
            {containsSpecialChar ? (
                <span className="text-success mb-2 d-block">
                    <FontAwesomeIcon icon={faCheck} />
                    Contains special character
                </span>
            ) : (
                <span className="text-danger mb-2 d-block">
                    <FontAwesomeIcon icon={faTimes} />
                    Does not contain special character
                </span>
            )}
            {length ? (
                <span className="text-success mb-2 d-block">
                    <FontAwesomeIcon icon={faCheck} />
                    Length must be larger than 8
                </span>
            ) : (
                <span className="text-danger mb-2 d-block">
                    <FontAwesomeIcon icon={faTimes} />
                    Length must be larger than 8
                </span>
            )}
        </div>
    );
}
export default App;