import axios from "axios"

const  ApiCall = (action) => {
    return axios.get(`https://api.github.com/users/${action.payload}`)
}

export default ApiCall