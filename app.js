const Header = () => {
    return (
        <header>
            <h1>Fantasy Football Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Liam
            </span>
            <Counter />
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score"> 21</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/*Player List*/}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);