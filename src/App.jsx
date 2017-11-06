import React, {Component} from 'react';
import './style.css';
import Clock from './Clock.jsx'
// import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      deadline: 'June 15, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }
  render() {
    return (
      <div className="App">
        <div className="Header">Countdown To Your Next Birthday <br /> </div>
        <div className='Date'>{this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <br/>
        <input className="Input" onChange={(event) => this.setState({newDeadline: event.target.value})}placeholder="When's your next birthday?" />
        <button onClick={() => this.changeDeadline()}>Countdown</button>
      </div>
    )
  }
}

export default App;
