const players = [
    {
        name: "Liam",
        score: 12
    },
    {
        name: "Toby",
        score: 21
    },
    {
        name: "Kelly",
        score: 15
    },
    {
        name: "Owen",
        score: 17
    },
    {
        name: "Lydia",
        score: 10
    },
    {
        name: "Louise",
        score: 7
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
            <Counter score={props.score}/>
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score"> {props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
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
                    score={player.score} 
                />
            )}
            
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);