import axios from 'axios'



export function registerHandleAction(registerData, dispatch) {
    axios
        .post("/api/register", registerData)
        .then((res) => console.log(res))
        .catch(err => dispatch({
            
        }))
}