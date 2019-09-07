import React from 'react';
import Stats from './Stats';
import Stopwatch from './StopWatch';
import PropTypes from 'prop-types';


const Header = (props) => {
    return (
        <header>
            <Stats 
                players={props.players}
            />
            <h1>{props.title}</h1>
            <Stopwatch/>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
};

export default Header;