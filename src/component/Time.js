import React  from 'react';
import Moment from 'react-moment';

 
export default class Time extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            startTime:'2020-06-01'
        }
    }
    
     render() {
        const date = new Date();
        return (
            <div>
    
            <h6>
                Time Taken By Project:
            <Moment  fromNow ago>{this.startTime}</Moment>
            </h6>
            </div>
   
        
        );
    }
}