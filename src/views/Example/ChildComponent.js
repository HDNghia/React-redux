import React from 'react';
import './Demo.scss'
class ChildComponent extends React.Component {
    //re-render
    state = {
        showJob: false
    }
    handleShowHide = () => {
        this.setState ({
            showJob: !this.state.showJob
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>> handleOnlickDelete: ', job)
        this.props.deleteJob(job)
    }
    render() {
        // console.log('>>> call render: ', this.state)
        console.log('>>> check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        //key:value
        let { showJob } = this.state;
        let {  arrJob } = this.props;
        // Điều kiện để đi làm 
        let check = showJob === true ? 'showJob = true' : 'showJob = false';
        console.log('>>> check conditional: ', check)
        return (
            <>
            {showJob === false ?
            <div>
                <button className='btn-show' onClick = {() => this.handleShowHide()}>show</button>
            </div>
            :
                <>
                 {/* <div>child component: {this.props.name}</div> */}
                 <div className='job-lists'>
                    {
                        //vòng lặp map 
                        arrJob.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary} <></> <span onClick={() => this.handleOnclickDelete(item)}>X</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div><button style={{color: 'blue'}} onClick={()=> this.handleShowHide()}>hide</button></div>
            
                </>
            
            }
               
            </>
        )

    }
}

// arrow function 
// const ChildComponent = (props) => {
//         let { arrJob } = props;
//         return (
//             <>
//                 {/* <div>child component: {this.props.name}</div> */}
//                 <div className='job-lists'>
//                     {
//                         //vòng lặp map 
//                         arrJob.map((item, index) => {
//                             if(+item.salary >= 500){
//                                 return (
//                                     <div key={item.id}>
//                                         {item.title} - {item.salary} $
//                                     </div>
//                                 )
//                             }
//                         })
//                     }
//                 </div>
//             </>
//         )
// }
export default ChildComponent;