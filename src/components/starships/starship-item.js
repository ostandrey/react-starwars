import React from 'react'
import {connect} from 'react-redux'

const StarshipItem = ({starship, state}) => {
    return (
    <>{
        starship.isLoading
            ?
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            :
            <div className={"item-info"}>
                <h2>{starship.starship.name}</h2>
                <div className="dropdown-divider"/>
                <h3>Model: {starship.starship.model}</h3>
                <h3>MGLT: {starship.starship.MGLT}</h3>
                <h3>Cargo capacity: {starship.starship.cargo_capacity}</h3>
                <h3>Consumables: {starship.starship.consumables}</h3>
                <h3>Cost in credits: {starship.starship.cost_in_credits}</h3>
                <h3>Created: {starship.starship.created}</h3>
                <h3>Crew: {starship.starship.crew}</h3>
                <h3>Edited: {starship.starship.edited}</h3>
                <h3>Hyperdrive rating: {starship.starship.hyperdrive_rating}</h3>
                <h3>Length: {starship.starship.length}</h3>
                <h3>Manufacturer: {starship.starship.manufacturer}</h3>
                <h3>Max atmosphering speed: {starship.starship.max_atmosphering_speed}</h3>
                <h3>Passengers: {starship.starship.passengers}</h3>
                <h3>Starship class: {starship.starship.starship_class}</h3>
            </div>


    }</>

    )
};

const mapStateToProps = state => ({
    starship: state.starship,
    state
});

export default connect(mapStateToProps, null)(StarshipItem) ;
