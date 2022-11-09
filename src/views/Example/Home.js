import React, { useState, useEffect } from "react";
import Color from "../HOC/Color";
import { connect } from 'react-redux'
import './Home.scss';
import { editUser, readUser, userDeleted, createNewUser, createUserRandom } from '../../store/action/adminAction';
import { getAllUsers, updateUser } from '../../views/Users/userService';
import EditUser from "./EditUser";
function Home(props) {
    const [modalEdit, setModalEdit] = useState(false);
    const toggleEdit = () => setModalEdit(!modalEdit);
    const [edituser, setEditUser] = useState({ UserEdit: {} })
    useEffect(() => {
        async function fetchMyAPI() {
            let res = await getAllUsers();
            props.fetchUserRedux(res.data && res.data.data ? res.data.data : [])
        }
        fetchMyAPI()
    })
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: ''
    });
    const handleEditUser = (data) => {
        console.log('check: ', data);
        toggleEdit()
        setEditUser({
            UserEdit: data
        })
    }
    const updateUserId = async (data) => {
        props.updateUserRedux(data)
        toggleEdit()
        // try {
        //     let res = await updateUser(data);
        //     console.log('response create user: ', res)
        //     toggleEdit()
        // } catch (error) {
        //     console.log(error)
        // }
    }
    const handleDeleteUser = (user) => {
        console.log('checkk user delete: ', user);
        props.deleteUserRedux(user);
    }
    const handleCreateUser = () => {
        props.addUserRedux();
    }
    const onchangeInput = (event, item) => {
        // firstName: '',
        // lastName: '',
        // email: '',
        // address: ''
        let copyState = { ...state }
        copyState[item] = event.target.value;
        setState({
            ...copyState
        })
        console.log('check state: ', state)
    }
    const checkValideInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'email', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop', state[arrInput[i]], arrInput[i])
            if (!state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddNewUser = () => {
        let isValid = checkValideInput();
        if (isValid === true) {
            // props.createNewUser(state);
            console.log("check state: ", state);
            props.createUser(state);
        }
    }
    let listUsers = props.dataRedux;
    return (
        <>
            {
                modalEdit &&
                <EditUser
                    modal={modalEdit}
                    toggle={toggleEdit}
                    currentUser={edituser}
                    updateUser={updateUserId}
                />
            }

            <div className="container">
                <form className="form-add-user">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>First Name</label>
                            <input type="text" class="form-control" id="fistName" placeholder="FistName"
                                onChange={(event) => onchangeInput(event, "firstName")}
                                value={state.firstName} />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="LastName"
                                onChange={(event) => onchangeInput(event, "lastName")}
                                value={state.lastName} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" id="email" placeholder="abc@gmail.com"
                            onChange={(event) => onchangeInput(event, "email")}
                            value={state.email} />
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" id="address" placeholder="lvh street"
                            onChange={(event) => onchangeInput(event, "address")}
                            value={state.address} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={() => handleAddNewUser()}>Add new</button>
                </form>
                <table class="table table-hover">
                    <thead>
                        <tr className="bg-success">
                            <th scope="col">stt</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (

                                    <tr className="child" key={item.id}

                                    >
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>

                                        <td>
                                            <button className="btn btn-success" onClick={() => handleEditUser(item)}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => handleDeleteUser(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button class="btn btn-primary" onClick={() => handleCreateUser()}>Add new random</button>
            </div>
        </>
    )
}

// class Home extends React.Component {


//     componentDidMount() {
//         // setTimeout(() => {
//         //     console.log('check timeout')
//         //     this.props.history.push('/todo')
//         // }, 3000)
//     }

//     handleDeleteUser = (user) => {
//         console.log('checkk user delete: ', user);
//         this.props.deleteUserRedux(user);
//     }
//     handleCreateUser = () => {
//         this.props.addUserRedux();
//     }
//     render() {
//         console.log('>>> check props redux: ', this.props.dataRedux)
//         let listUsers = this.props.dataRedux;
//         return (
//             <>
//                 <div>
//                     hello world from homepage with Eric & Hoi dan IT
//                 </div>
//                 <div>
//                     <img src={burger} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
//                 </div>
//                 <div>
//                     {listUsers && listUsers.length > 0 &&
//                         listUsers.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     &nbsp; {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
//                                 </div>
//                             )
//                         })
//                     }
//                     <button onClick={() => this.handleCreateUser()}>Add new</button>
//                 </div>
//             </>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch(userDeleted(userDelete)),
        addUserRedux: () => dispatch(createUserRandom()),
        createUser: (dataUser) => dispatch(createNewUser(dataUser)),
        fetchUserRedux: (data) => dispatch(readUser(data)),
        updateUserRedux: (data) => dispatch(editUser(data))
    }
}

//Dùng withRouter để thêm props cho home
//Dùng connect để tạo sự liên kết giữa react với redux
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home)); 