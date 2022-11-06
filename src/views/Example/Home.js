import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import burger from '../../assets/images/burger.jpg'
import { connect } from 'react-redux'
class Home extends React.Component {


    componentDidMount() {
        // setTimeout(() => {
        //     console.log('check timeout')
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        console.log('checkk user delete: ', user);
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log('>>> check props redux: ', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    hello world from homepage with Eric & Hoi dan IT
                </div>
                <div>
                    <img src={burger} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    &nbsp; {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>

                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

//Dùng withRouter để thêm props cho home 
//Dùng connect để tạo sự liên kết giữa react với redux
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home)); 