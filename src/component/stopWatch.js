import React, { Component } from 'react'

class Watch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             runningTime:0,
             isRunning:false
        };
    }
    componentDidMount(){
        const startTime = Date.now();
      
    }
    handleStartStopClick =() => {
        if(this.state.isRunning){
       clearInterval(this.timerID);
       this.setState({isRunning:false})
        }
        else
        {   const startTime = Date.now() - this.state.runningTime;
            this.timerID = setInterval(()=>{
                this.setState({
                    runningTime:Date.now()-startTime,
                    isRunning:true
                });
            },100);
        }

    }

    handleResetClick = ()=>{
        clearInterval(this.timerID);
        this.setState({isRunning:false,runningTime:0});
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    formatTime(t){
        return (t/1000).toFixed(1); 
    }
    render() {
        return (
            <div>
                <h1> {this.formatTime(this.state.runningTime)}</h1>
                <button onClick={this.handleStartStopClick}>{this.state.isRunning?"Stop":"Start"}</button>
                <button onClick={this.handleResetClick}>Reset</button>
            </div>
        )
    }
}

export default Watch
