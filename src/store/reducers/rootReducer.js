import { createNewUser } from '../action/adminAction';
import { createNewUserService } from '../../views/Users/userService';
import actionTypes from '../action/actionType';
const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi Dan IT' },
        { id: 3, name: 'Hoi Dan IT voi ERIC' }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>> run into delete user: ', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        case 'CREATE_NEW_USER':
            createNewUser(action.payload);
        case actionTypes.TEXT:
            alert('vao roi nha');
        case actionTypes.CREATE_USER_SUCCESS:
            alert('Save user successed')
        case actionTypes.CREATE_USER_FAILDED:
            alert('Save user failed')
        default:
            return state;
    }
}

export default rootReducer;