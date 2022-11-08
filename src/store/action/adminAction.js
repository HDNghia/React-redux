import actionTypes from './actionType';
import { createNewUserService } from '../../views/Users/userService';

const createNewUser = async (data) => {
    try {
        await createNewUserService(data);
        alert('nghiaaa');
    }
    catch (e) {
        console.log('saveUserFailed error', e)
    }
}
const test = () => ({
    type: actionTypes.TEXT
})

export { createNewUser, test }
