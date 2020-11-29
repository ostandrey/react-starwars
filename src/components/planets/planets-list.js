import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getPlanet, getPlanets} from "../../actions";
import PlanetsListItem from "./planets-list-item";

const PlanetsList = ({planets, getPlanets, getPlanet}) => {
    useEffect(() => {
        getPlanets()
    }, [getPlanets]);
    return (
        <>{
            planets.isLoading
            ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
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
        }</>
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
