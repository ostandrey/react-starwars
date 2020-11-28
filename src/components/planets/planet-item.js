import React from 'react'
import {connect} from 'react-redux'

const PlanetItem = ({planet, state}) => {
    return (
        <>{
            planet.isLoading
                ? <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                : <li>
                    <h2>{planet.planet.name}</h2>
                </li>
        }</>

    )
};

const mapStateToProps = state => ({
    planet: state.planet,
    state
});

export default connect(mapStateToProps, null)(PlanetItem);
