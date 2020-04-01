const  axios = require('axios')

const baseURL = 'http://localhost:5000/users/'

const addUser = (userObj) => {
    const request = axios.post(`${baseURL}/add`, userObj)
    return request.then(response => response.data)
}

const getUser = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

export default {
    addUser,
    getUser
}