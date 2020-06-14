import React, { Component } from 'react'

class Tentry extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'TimeTracker',
    name:'',
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    console.log(`Name of user ${this.state.name}`)
    event.preventDefault();
  }
  onChangeName(event) {
    this.setState({name: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="justify-content-center">
        <div className="form-group">
        
        <label>
          Pick your favorite flavor: 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="YouTubeCLoneApp">YouTubeCLoneApp</option>
            <option value="iremember">iremember</option>
            <option value="TodoList">TodoList</option>
            <option value="TimeTracker">TimeTracker</option>
          </select>
        </label>  
        </div>
        <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" value={this.state.name}
                onChange={this.onChangeName} />
                </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Tentry
