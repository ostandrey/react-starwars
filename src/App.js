import React from 'react'
import { Link, BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import classnames from 'classnames'
import './App.css';
import StarshipsList from "./components/starships/starships-list";
import PlanetsList from "./components/planets/planets-list";
import HeroesList from "./components/heroes/heroes-list";
import StarshipItem from "./components/starships/starship-item";
import PlanetItem from "./components/planets/planet-item";
import HeroesItem from "./components/heroes/hero-item";
import NavBar from "./components/nav-bar/nav-bar";

const App = ({active = false}) => {
  return (
      <div className="container">
          <Router>
              <NavBar/>
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
