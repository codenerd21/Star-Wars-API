import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { getAllStarships } from '../../services/sw-api';
import Starship from '../Starship/Starship';

class App extends Component {
  state = {
    starships: []
  }

  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({ starships: starships.results });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>Star Wars API</header>
        <Switch>
          <Route exact path='/' render={() =>
            <section>
              {this.state.starships.map((ship, idx) =>
                <Link
                  to={`/starships/${idx}`}
                  key={ship.name}
                >
                  {ship.name}
                </Link>
              )}
            </section>
          } />
          <Route path='/starships/:idx' render={(props) =>
            <Starship {...props}
              getStarship={this.getStarship}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;