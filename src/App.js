import React from 'react'
import { Link, BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import StarshipsList from "./components/starships/starships-list";
import PlanetsList from "./components/planets/planets-list";
import HeroesList from "./components/heroes/heroes-list";
import StarshipItem from "./components/starships/starship-item";
import PlanetItem from "./components/planets/planet-item";

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
            <Switch>
                <Route exact path={'/starships'} component={StarshipsList} />
                <Route exact path={'/starships/:name'} component={StarshipItem} />
                <Route exact path={'/planets'} component={PlanetsList} />
                <Route exact path={'/planets/:name'} component={PlanetItem} />
                <Route exact path={'/heroes'} component={HeroesList} />
                <Redirect from='/' to='/starships'/>
            </Switch>

        </Router>
    </div>
  );
};

export default App;
