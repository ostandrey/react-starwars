import React from 'react'
import { Link, BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import StarshipList from "./components/starships/starship-list";
import PlanetList from "./components/planets/planet-list";
import HeroesList from "./components/heroes/heroes-list";

const App = () => {
  return (
    <div className="App">
      <h1>StarWars</h1>
        <Router>
        <div className="card">
            <button className={'btn'}>
                <Link to={'/heroes'}>Heroes</Link>
            </button>
            <div className="dropdown-divider"/>
            <button className={'btn'}>
                <Link to={'/planets'}>Planets</Link>
            </button>
            <div className="dropdown-divider"/>
            <button className={'btn'}>
                <Link to={'/starships'}>Starships</Link>
            </button>
        </div>
            <Route exact path={'/'} component={StarshipList} />
            <Route exact path={'/starships'} component={StarshipList} />
            <Route exact path={'/planets'} component={PlanetList} />
            <Route exact path={'/heroes'} component={HeroesList} />
        </Router>
    </div>
  );
};

export default App;
