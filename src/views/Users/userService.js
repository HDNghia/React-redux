import axios from "axios";
const getAllUsers = (inputId) => {
    return axios.get(`http://localhost:8080/api/v1/users`)
}
const createNewUserService = (data) => {
    return axios.post(`http://localhost:8080/api/v1/create-user`, data)
}

const deleteUserService = (userId) => {
    return axios.delete(`http://localhost:8080/api/v1/delete-user/${userId}`)
}

const updateUser = (data) => {
    return axios.put(`http://localhost:8080/api/v1/update-user`, data)
}

export { getAllUsers, createNewUserService, deleteUserService, updateUser }