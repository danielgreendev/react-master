import React, { Component } from 'react';
import axios from 'axios';


class Other extends Component {
    state = {
        selectedFile: null,
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }
    fileUploadHandler = () => {
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        axios.post('/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });
        console.log(formData)
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}
export default Other;