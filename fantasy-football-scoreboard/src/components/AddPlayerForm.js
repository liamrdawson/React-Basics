import React, {Component} from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value});
    }

    render() {
        console.log(this.state.value);
        return (
            <form>
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