import React, { Component } from 'react'
// import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import Moment from 'react-moment';
// import Stop from './stopWatch'

class Login extends Component {
    constructor(props) {
        super(props)
         this.onChangeMyName = this.onChangeMyName.bind(this);
         this.onChangeStartTime = this.onChangeStartTime.bind(this);
         this.onChangeProjectName = this.onChangeProjectName.bind(this);
         this.onChangeEndTime = this.onChangeEndTime.bind(this);
         this.onChangeProjectNmae = this.onChangeProjectName.bind(this);
         this.onChangeTotalTime  = this.onChangeTotalTime.bind(this);
         this.onSubmit=this.onSubmit.bind(this);

        this.state = {
             myname:'',
             project:'',
             startTime:'',
             endTime:'',
             totalTime:''
 
        }
    }
    onChangeMyName(e){
        this.setState({
            myname:e.target.value
        });
    }
    onChangeProjectName(e){
        this.setState({
            project:e.target.value
        });
    }
    onChangeStartTime(e){
        this.setState({
            startTime:e.target.value
        });
    }
    onChangeEndTime(e){
        this.setState({
            endTime:e.target.value
        });
    }
    onChangeTotalTime(e){
        this.setState({
            totalTime:e.target.value
        })
    }
    
    
    onSubmit(e)
    {
        e.preventDefault();
        console.log(`Form Submited:`);
        console.log(`MyName: ${this.state.myname}`);
        console.log(`Project Name: ${this.state.project}`)
        console.log(`Start Time: ${this.state.startTime}`);
        console.log(`End Time: ${this.state.endTime}`);
        console.log(`Total Time: ${this.state.totalTime}`)
        

        const newUser = {
            name : this.state.myname,
            project : this.state.project,
            startTime :  this.state.startTime,
            endTime : this.state.endTime,
            totalTime : this.state.totalTime
            
        }

        axios.post('http://localhost:5000/todos/add',newUser)
        .then(res => console.log(res.data));

        this.setState({
            myname:'',
            project:'',
            startTime:'',
            endTime:'',
            totalTime:''

           })
    
    }
    render() {
        return (
            <div style={{marginTop:50}}>
            
            <form onSubmit={this.onSubmit} className="justify-content-center">
                <div className="form-group">
                <label>MyName:</label>
                <input type="text" className="form-control"value={this.state.myname}
                onChange={this.onChangeMyName} />
                </div>
                <div className="form-group">
                <label>Project Name:</label>
                <input type="text" className="form-control" value={this.state.project}
                onChange={this.onChangeProjectName} />
                </div>
                <div className="form-group">
                <label>Start Time:</label>
                <input type="text" className="form-control"value={this.state.startTime}
                onChange={this.onChangeStartTime}  />
                </div>
                <div className="form-group">
                <label>End Time:</label>
                <input type="text" className="form-control"value={this.state.endTime}
                onChange={this.onChangeEndTime} />
                </div> 
                <div className="form-group">
                <label>Total Time:</label>
                <input type="text" className="form-control"value={this.state.totalTime}
                onChange={this.onChangeTotalTime} />
                </div> 
               
         
          
             <div className="form-group">
                <input type="submit" value="Submit-TimeEntry" className="btn btn-primary" />     
            </div>
            
            </form>  
            {/* <Stop /> */}
            </div>
        )
    }
}

export default Login;
