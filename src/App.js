import React from 'react'
import { Link, BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import StarshipsList from "./components/starships/starships-list";
import PlanetsList from "./components/planets/planets-list";
import HeroesList from "./components/heroes/heroes-list";
import StarshipItem from "./components/starships/starship-item";
import PlanetItem from "./components/planets/planet-item";
import HeroesItem from "./components/heroes/heroes-item";

const App = () => {
  return (
      <div className="container">
            <Router>
            <div className="nav-bar">
                <span className={'nav-btn'}>
                    <Link to={'/heroes'} className={"nav-btn-text"}>Heroes</Link>
                </span>
                <span className={'nav-btn'}>
                    <Link to={'/planets'} className={"nav-btn-text"}>Planets</Link>
                </span>
                <span className={'nav-btn'}>
                    <Link to={'/starships'} className={"nav-btn-text"}>Starships</Link>
                </span>
            </div>
            <div className={"content-container"}>
                <Switch>
                    <Route exact path={'/starships'} component={StarshipsList} />
                    <Route exact path={'/starships/:name'} component={StarshipItem} />
                    <Route exact path={'/planets'} component={PlanetsList} />
                    <Route exact path={'/planets/:name'} component={PlanetItem} />
                    <Route exact path={'/heroes'} component={HeroesList} />
                    <Route exact path={'/heroes/:name'} component={HeroesItem} />
                    <Redirect from='/' to='/starships'/>
                </Switch>
            </div>

        </Router>
    </div>
  );
};

export default App;
