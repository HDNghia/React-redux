import React from "react";
import axios from "axios";
import './ListUser.scss';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Adduser from './Adduser';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllUsers, createNewUserService, deleteUserService, updateUser } from "./userService";
import ModalEdit from "./ModalEdit";
function ListUser(props) {
    const [state, setState] = useState({ ListUsers: [] });
    const [edituser, setEditUser] = useState({ UserEdit: {} })
    const [modal, setModal] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        async function fetchMyAPI() {
            let res = await getAllUsers();
            setState({
                ListUsers: res.data && res.data.data ? res.data.data : []
            })
        }
        fetchMyAPI()

    })
    const handleViewDetailUser = (user) => {
        props.history.push(`/user/${user.id}`)
    }
    const createNewUser = async (data) => {
        try {
            let res = await createNewUserService(data);
            console.log('response create user: ', res)
            setModal(false);
        } catch (error) {
            console.log(error)
        }
        console.log('check data from child: ', data)
    }
    const toggle = () => setModal(!modal);
    const toggleEdit = () => setModalEdit(!modalEdit);
    const handleDeleteUser = async (userId) => {
        console.log('check id; ', userId)
        let res = await deleteUserService(userId)
        console.log(res);
    }
    const handleEditUser = (data) => {
        toggleEdit()
        setEditUser({
            UserEdit: data
        })
    }
    const updateUserId = async (data) => {
        console.log('check updateUser: ', data)
        try {
            let res = await updateUser(data);
            console.log('response create user: ', res)
            toggleEdit()
        } catch (error) {
            console.log(error)
        }
        console.log('check data from child: ', data)
    }
    return (
        <div className="list-user-container">
            <Button color="danger" onClick={toggle}>
                Add New User
            </Button>
            <Adduser
                modal={modal}
                toggle={toggle}
                createNewUser={createNewUser}
            />
            {
                modalEdit &&
                <ModalEdit
                    modal={modalEdit}
                    toggle={toggleEdit}
                    currentUser={edituser}
                    updateUser={updateUserId}
                />
            }

            <div className="title">
                fetch all list users
            </div>

            <table>
                <tr>
                    <th>stt</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Action</th>
                </tr>
                {state.ListUsers && state.ListUsers.length > 0 &&
                    state.ListUsers.map((item, index) => {
                        return (

                            <tr className="child" key={item.id}
                                onClick={() => handleViewDetailUser(item)}
                            >
                                <td>{index + 1}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>
                                    <button onClick={() => handleEditUser(item)}>Edit</button>
                                    <button onClick={() => handleDeleteUser(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default ListUser;
