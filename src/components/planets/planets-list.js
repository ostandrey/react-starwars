import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getPlanets} from "../../actions";
import PlanetsListItem from "./planets-list-item";

const PlanetsList = ({planets, getPlanets}) => {
    useEffect(() => {
        getPlanets()
    }, [getPlanets]);
    return (
        <div>
            <ul>
                {
                    planets.planets.map(planet =>
                        <PlanetsListItem
                            key={planet.name}
                            planet={planet}
                        />
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
    getPlanets: () => dispatch(getPlanets())
});

export default connect(
    mapStateToProps,
    mapDispathToProps)(PlanetsList)
