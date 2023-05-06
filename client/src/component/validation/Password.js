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
        <div>
            <input type="password" value={text} onChange={handleChange} className="form-control mb-2" />
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
    );
}
export default App;