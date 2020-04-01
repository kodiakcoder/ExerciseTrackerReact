const axios  = require('axios')

const baseURL = 'http://localhost:5000/exercises/'

const getExercises = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}


const getSpecificExercise =(exerciseID) => {
    const request = axios.get(`${baseURL}/${exerciseID}`)
    return request.then(response => response.data)
}


const deleteExercise = (exerciseID) => {
    const request = axios.delete(`${baseURL}/${exerciseID}`)
    return request.then(response => response.data)
}

const addExercise = (exerciseOBJ) => {
    const request = axios.post(`${baseURL}/add`, exerciseOBJ)
    return request.then(response => response.data)
}


const updateExercise = (exerciseOBJ, exerciseID) => {
    const request = axios.put(`${baseURL}/updata/${exerciseID}`,exerciseOBJ)
    return request.then(response => response.data)
}


export default {
    getExercises,
    getSpecificExercise,
    deleteExercise,
    addExercise,
    updateExercise
}