import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getPlanet, getPlanets} from "../../actions";
import PlanetsListItem from "./planets-list-item";

const PlanetsList = ({planets, getPlanets, getPlanet}) => {
    useEffect(() => {
        getPlanets()
    }, [getPlanets]);
    return (
        <div>
            <ul>
                {
                    planets.planets.map(planet =>
                        <li onClick={() => {getPlanet(planet.url)}}>
                            <PlanetsListItem
                                key={planet.name}
                                planet={planet}
                            />
                        </li>

                    )
                }
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    planets: state.planets
});

const mapDispathToProps =  dispatch => ({
    getPlanets: () => dispatch(getPlanets()),
    getPlanet: (url) => {
        dispatch(getPlanet(url))
    }
});

export default connect(
    mapStateToProps,
    mapDispathToProps)(PlanetsList)
