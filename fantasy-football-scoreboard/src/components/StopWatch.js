import React, {Component} from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    componentDidMount() {
        this.intervalID = setInterval( () => this.tick(), 100); 
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                    previousTime: now,
                    elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
                }));
        }
    }

    handleTimer = () => {
        this.setState( prevState => ({
                isRunning: !prevState.isRunning
        }));
        if (!this.state.isRuning) {
            this.setState({
                    previousTime: Date.now()
                });
        }
    }

    handleReset = () => {
        this.setState( {
            elapsedTime: 0,
        });
    }

    render() {

        const timerInSeconds = this.state.isRunning ? 'Stop' : 'Start'

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {Math.floor(this.state.elapsedTime / 1000)}
                </span>
                <button onClick={this.handleTimer}> {timerInSeconds}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
