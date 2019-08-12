import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import '../App.css';


class App extends Component {

    state = {
        players: [
            { name: "Liam",
            score: 0,
                id: 1 },
            { name: "Toby", 
            score: 0,    
                id: 2 },
            { name: "Kelly", 
            score: 0,   
                id: 3 },
            { name: "Owen", 
            score: 0,    
                id: 4 },
            { name: "Lydia",
            score: 0,    
                id: 5 },
            { name: "Louise", 
            score: 0, 
                id: 6 }
        ]
    };

    // Using the name 'delta' as this is the variation of a function, in our case the number the score should be changed by.
    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
            }));
        console.log(`index: ${index}, delta: ${delta}`);
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( player => player.id !== id )
            } 
        });
    }

    render(){
        return (
            <div className="scoreboard">
                <Header title="Fantasy Football Scoreboard" 
                        players={this.state.players} />

                {/*Player List*/}
                {this.state.players.map( (player, index) =>
                    <Player 
                        name={player.name} 
                        score={player.score}
                        id={player.id}
                        key={player.id}
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
                
            </div> //scoreboard
        );
    } 
}

export default App;