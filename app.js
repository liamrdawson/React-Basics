const players = [
    {
        name: "Liam",
        score: 12,
        id: 1
    },
    {
        name: "Toby",
        score: 21,
        id: 2
    },
    {
        name: "Kelly",
        score: 15,
        id: 3
    },
    {
        name: "Owen",
        score: 17,
        id: 4
    },
    {
        name: "Lydia",
        score: 10,
        id: 5
    },
    {
        name: "Louise",
        score: 7,
        id: 6
    },

];

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {

    state = {
        score: 0
    };

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score"> {this.state.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Fantasy Football Scoreboard" 
                    totalPlayers={props.initialPlayers.length} />

            {/*Player List*/}
            {props.initialPlayers.map( player =>
                <Player 
                    name={player.name} 
                    key={player.id}
                />
            )}
            
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);