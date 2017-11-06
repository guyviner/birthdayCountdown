import React, {Component} from 'react';
import './style.css'

class Clock extends Component {
  constructor (props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(()=>this.getTimeUntil(this.props.deadline), 1000)
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    const seconds = Math.floor(time/1000) % 60;
    const minutes = Math.floor(time/60/1000) % 60;
    const hours = Math.floor(time/(1000*60*60)) % 24;
    const days = Math.floor(time/(1000*60*60*24));
    // console.log(days, hours, minutes, seconds);
    this.setState({days, hours, minutes, seconds})
  }

  render() {
    // this.getTimeUntil(this.props.deadline);
    return(
      <div>
        <div className="Body">
          <div className="Body">{this.leading0(this.state.days)} Days</div>
          <div className="Body">{this.leading0(this.state.hours)} Hours</div>
          <div className="Body">{this.leading0(this.state.minutes)} Minutes</div>
          <div className="Body">{this.leading0(this.state.seconds)} Seconds</div>
        </div>
      </div>
    )
  }
}

export default Clock;
