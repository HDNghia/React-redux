import { toast } from 'react-toastify';
import actionTypes from '../action/actionType';
const initState = {
    users: [

    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.DELETE_USER:
            toast.success("delete user success")
            break;
        case actionTypes.CREATE_USER_SUCCESS:
            console.log('create user success')
            break;
        case 'CREATE_USER_RAMDOM':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        case actionTypes.READ_USER:
            let userCurrent = action.payload;
            state.users = userCurrent;
            return {
                ...state
            }
        case actionTypes.EDIT_USER:
            toast.success("update user success")
            break;
        default:
            return state;
    }
}

export default rootReducer;