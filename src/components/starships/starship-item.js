import React from 'react'
import {connect} from 'react-redux'

const StarshipItem = ({starship, state}) => {
    console.log(state)
    return (
    <>{
        starship.isLoading
            ? <p>Loading</p>
            : <li>
                    <h2>{starship.starship.name}</h2>
            </li>
    }</>

    )
};

const mapStateToProps = state => ({
    starship: state.starship,
    state
});

export default connect(mapStateToProps, null)(StarshipItem) ;
