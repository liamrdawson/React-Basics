import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import '../App.css';


class App extends Component {

  state = {
      players: [
          { name: "Liam",
              id: 1 },
          { name: "Toby",     
              id: 2 },
          { name: "Kelly",    
              id: 3 },
          { name: "Owen",     
              id: 4 },
          { name: "Lydia",    
              id: 5 },
          { name: "Louise",   
              id: 6 }
      ]
  };

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
                      totalPlayers={this.state.players.length} />
  
              {/*Player List*/}
              {this.state.players.map( player =>
                  <Player 
                      name={player.name} 
                      id={player.id}
                      key={player.id}
                      removePlayer={this.handleRemovePlayer}
                  />
              )}
              
          </div> //scoreboard
      );
  } 
}

export default App;