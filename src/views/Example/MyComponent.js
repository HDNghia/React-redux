import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    // state giúp người lập trình cập nhật mà ko cần refresh trang web 
    state = {
        arrJob: [
            {id: 'abcJob1', title: 'developer', salary: '500'},
            {id: 'abcJob2', title: 'Testers', salary: '400'},
            {id: 'abcJob3', title: 'Project manager', salary: '1000'}
        ]
    }
    
    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        // let currenJobs = this.state.arrJob
        // currenJobs.push(job)
        this.setState({
            arrJob: [...this.state.arrJob, job]
            // arrJob: currenJobs
        })
    }

    deleteJob = (job) => {
        let currenJobs = this.state.arrJob
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currenJobs
        })
    }
    componentDidUpdate(preProps, prevState) {
        console.log('>> run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state)
    }
    componentDidMount() {
        console.log('>>> run component did mount')
    }

    // re-render
    render() {
        // xuất giá trị state trong console
        console.log('>>> call render: ', this.state)
        return (
            <>
            <AddComponent
                addNewJob = {this.addNewJob}
            />
            <ChildComponent
                    arrJob={this.state.arrJob}
                    deleteJob = {this.deleteJob}
                />
            </>
        ) 
    }
}

export default MyComponent;