import React, {Component} from 'react';

class AddPlayerForm extends Component {

    playerInput = React.createRef();

    handleSubmit = (e) => {
        const {addPlayer} = this.props;
        e.preventDefault();
        addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        console.log(this.playerInput);
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
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