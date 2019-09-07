import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon'; 

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func.isRequired,
        removePlayer: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        isHighScore: PropTypes.bool
      };

    render() {
        const { 
            name,
            removePlayer,
            id,
            score,
            changeScore,
            index
        } = this.props;

        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon isHighScore={this.props.isHighScore} /> 
                    {name}
                </span>
                <Counter 
                    score={score}
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        );
    }
}



export default Player;