import React, {Component} from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
import { Provider } from './Context'
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

    prevPlayerId = this.state.players.pop().id;

    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
          score: prevState.players[index].score += delta
        }));
      }
    
      handleAddPlayer = (name) => {
        this.setState( prevState => {
          return {
            players: [
              ...prevState.players,
              {
                name,
                score: 0,
                id: this.prevPlayerId += 1
              }
            ]
          };
        });
      }
    
      handleRemovePlayer = (id) => {
        this.setState( prevState => {
          return {
            players: prevState.players.filter(p => p.id !== id)
          };
        });
      }
    
      render() {
        return (
          <Provider value={{
              players: this.state.players,
              actions: {
                  changeScore: this.handleScoreChange
              }
          }}>
            <div className="scoreboard">
              <Header />
    
              <PlayerList 
                removePlayer={this.handleRemovePlayer}   
              />
              
              <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
          </Provider>
        );
      }
    }
    
    export default App;