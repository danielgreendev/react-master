import React, { Component } from 'react'

export default class Other extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input : "",
            valid : undefined
        }

    }

    onChange = (e) => {
        const newValue = e.target.value
        this.setState({ [e.target.name] : newValue })
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
        const myString = newValue
        if (regex.test(myString)) {
            this.setState({ valid : true })
        } else {
            this.setState({ valid : false })
        }
    }
    
    render() {
        // const myString = "MyString123!";
        // if (regex.test(myString)) {
        //     console.log("The string contains at least one uppercase letter, number, and special character.");
        // } else {
        //     console.log("The string does not contain at least one uppercase letter, number, or special character.");
        // }

        return (
            <div className='container mt-4'>
                <input className='form-control' 
                       value={ this.state.input }
                       name="input"
                       onChange={ this.onChange }
                />
                <p className='display-4'>
                    {
                        this.state.valid == undefined ? "" : (
                            this.state.valid === true ? "Strong Password" : "Password must contain at least one uppercase letter, one number and one special character"
                        )
                    }
                </p>
            </div>
        )
    }
}
