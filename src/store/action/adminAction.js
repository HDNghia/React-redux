import actionTypes from './actionType';
import axios from 'axios';

export const createNewUser = (data) => {
    try {
        // let res = await createNewUserService(data);
        let res = axios.post(`http://localhost:8080/api/v1/create-user`, data);
        if (res && res.errCode === 0) {
            return {
                type: actionTypes.CREATE_USER_SUCCESS
            }
        }
    }
    catch (e) {
        console.log('saveUserFailed error', e)
    }
}
export const readUser = (data) => ({
    type: actionTypes.READ_USER,
    payload: data
})
// deleteUserRedux: (userDelete) => dispatch(userDeleted(userDelete)),
export const userDeleted = (data) => {
    try {
        let res = axios.delete(`http://localhost:8080/api/v1/delete-user/${data}`);
        if (res ) {
            return {
                type: actionTypes.DELETE_USER
            }
        }
    }
    catch (e) {
        console.log('DeleteUserFailed error', e)
    }
}
export const editUser = (data) => {
    try {
        let res = axios.put(`http://localhost:8080/api/v1/update-user`, data);
        if (res) {
            return {
                type: actionTypes.EDIT_USER
            }
        }
    }
    catch (e) {
        console.log('EidtUserFailed error', e)
    }
}

export const createUserRandom = () => {
    return {
        type: actionTypes.CREATE_USER_RAMDOM
    }
}

// export { createNewUser, test }
