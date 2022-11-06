import React, { useEffect, useState } from 'react';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function ModalEdit(props) {
    let user = props.currentUser
    const [state, setState] = useState({
        id: user.UserEdit.id,
        firstName: user.UserEdit.firstName,
        lastName: user.UserEdit.lastName,
        email: user.UserEdit.email,
        address: user.UserEdit.address
    });

    const handleOnchangeInput = (event, item) => {
        let copyState = { ...state }
        copyState[item] = event.target.value;
        setState({
            ...copyState
        })
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
    const handleUpdateUser = () => {
        let isValid = checkValideInput();
        if (isValid === true) {
            props.updateUser(state);
            console.log("data modal: ", state);
        }
    }
    // setCurrentUser({
    //     currentUser: props.currentUser
    // })
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Edit User</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="FirstName">
                                FirstName
                            </Label>
                            <Input
                                id="FirstName"
                                name="FirstName"
                                onChange={(event) => handleOnchangeInput(event, "firstName")}
                                value={state.firstName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="LastName">
                                LastName
                            </Label>
                            <Input
                                id="LastName"
                                name="LastName"
                                onChange={(event) => handleOnchangeInput(event, "lastName")}
                                value={state.lastName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email">
                                Email
                            </Label>
                            <Input
                                id="Email"
                                name="Email"
                                type="email"
                                onChange={(event) => handleOnchangeInput(event, "email")}
                                value={state.email}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">
                                Address
                            </Label>
                            <Input
                                id="address"
                                name="address"
                                onChange={(event) => handleOnchangeInput(event, "address")}
                                value={state.address}
                            />
                        </FormGroup>
                        <Button color="primary" onClick={() => handleUpdateUser()}>
                            Save
                        </Button>{' '}
                        <Button color="secondary" onClick={props.toggle}>
                            Cancel
                        </Button>
                    </Form>
                </ModalBody>
                {/* Nút tắt phần modal */}
                {/* <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter> */}
            </Modal>
        </div>
    );
}

export default ModalEdit;