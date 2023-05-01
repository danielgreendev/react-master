import React, { Component } from 'react'

export default class Other extends Component {
    render() {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        const myString = "MyString123!";
        if (regex.test(myString)) {
            console.log("The string contains at least one uppercase letter, number, and special character.");
        } else {
            console.log("The string does not contain at least one uppercase letter, number, or special character.");
        }

        return (
            <div>
                Other
            </div>
        )
    }
}
