import React, { useState } from 'react';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function Adduser(props) {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: ''
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
    const handleAddNewUser = () => {
        let isValid = checkValideInput();
        if (isValid === true) {
            props.createNewUser(state);
            console.log("data modal: ", state);
        }
    }
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Add New User</ModalHeader>
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
                        <Button color="primary" onClick={() => handleAddNewUser()}>
                            Create
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

export default Adduser;