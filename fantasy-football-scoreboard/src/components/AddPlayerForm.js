import React, {Component} from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value});
    }

    handleSubmit = (e) => {
        const {addPlayer} = this.props;
        e.preventDefault();
        addPlayer(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        console.log(this.state.value);
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a players name..."
                />

                <input
                    type="submit"
                    placeholder="Add Player"
                />

            </form>
        );
    }
}

export default AddPlayerForm;