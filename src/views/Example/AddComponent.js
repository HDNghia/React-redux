import React from "react";

class AddComponent extends React.Component {
    // state giúp người lập trình cập nhật mà ko cần refresh trang web 
    state = {
        title: '',
        salary: '',
    }
    
    handleChangeTileJob = (event) => {
        this.setState ({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState ({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('missing required params')
            return;
        }
        console.log('>>> check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                 <form>
                <label for="fname">Job title:</label><br/>
                <input 
                type="text" 
                onChange={(event) => this.handleChangeTileJob(event)} 
                value={this.state.title}/><br/>
                <label for="lname">Salary :</label><br/>
                <input 
                type="text" 
                onChange={(event) => this.handleChangeSalary(event)} 
                value={this.state.salary}/><br/><br/>
                <input type="submit" onClick={(event) => this.handleSubmit(event)} value="Submit"/>
            </form> 
            </>
        )
    }
}
export default AddComponent ;