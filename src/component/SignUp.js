import React, { Component } from 'react'
// import { Link, Route } from 'react-router-dom'
import axios from 'axios'

class SignUp extends Component {
    constructor(props) {
        super(props)
         this.onChangeMyName=this.onChangeMyName.bind(this);
         this.onChangeUserName=this.onChangeUserName.bind(this);
         this.onChangeEmail=this.onChangeEmail.bind(this);
         this.onChangePassword=this.onChangePassword.bind(this);
         this.onSubmit=this.onSubmit.bind(this);

        this.state = {
             myname:'',
             username:'',
             email:'',
             password:''
 
        }
    }
    onChangeMyName(e){
        this.setState({
            myname:e.target.value
        });
    }
    onChangeUserName(e){
        this.setState({
            username:e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        console.log(`Form Submited:`);
        console.log(`MyName: ${this.state.myname}`);
        console.log(`UserName: ${this.state.username}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);

        // const newUser = {
        //     name : this.state.myname,
        //     username : this.state.username,
        //     email :  this.state.email,
        //     password : this.state.password
        // }

        // axios.post('http://localhost:5000/todos/add',newUser)
        // .then(res => console.log(res.data));

        // this.setState({
        //     myname:'',
        //     username:'',
        //     email:'',
        //     password:''
        //    })
    
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
                <label>UserName:</label>
                <input type="text" className="form-control"value={this.state.username}
                onChange={this.onChangeUserName} />
               </div>
            
             <div className="form-group">
                <label>Email:</label>
                <input type="text" className="form-control"value={this.state.email}
                onChange={this.onChangeEmail} />
             </div>
           
             <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" value={this.state.password}
                onChange={this.onChangePassword} />
             </div>
             
             <div className="form-group">
                <input type="submit" value="LogIn" className="btn btn-primary" />     
            </div>
            
            </form>  
            </div>
        )
    }
}

export default SignUp;
