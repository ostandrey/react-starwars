import React from 'react'
import {connect} from 'react-redux'

const PlanetItem = ({planet}) => {
    return (
        <>{
            planet.isLoading
                ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                :<div className={"item-info"}>
                    <h2>{planet.planet.name}</h2>
                    <div className="dropdown-divider"/>
                    <h3>Climate: {planet.planet.climate}</h3>
                    <h3>Created: {planet.planet.created}</h3>
                    <h3>Diameter: {planet.planet.diameter}</h3>
                    <h3>Edited: {planet.planet.edited}</h3>
                    <h3>Gravity: {planet.planet.gravity}</h3>
                    <h3>Orbital period: {planet.planet.orbital_period}</h3>
                    <h3>Population: {planet.planet.population}</h3>
                    <h3>Rotation period: {planet.planet.rotation_period}</h3>
                    <h3>Surface water: {planet.planet.surface_water}</h3>
                    <h3>Terrain: {planet.planet.terrain}</h3>
                </div>

        }</>

    )
};

const mapStateToProps = state => ({
    planet: state.planet
});

export default connect(mapStateToProps, null)(PlanetItem);
