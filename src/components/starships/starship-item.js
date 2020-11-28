import React from 'react'
import {connect} from 'react-redux'

const StarshipItem = ({starship, state}) => {
    return (
    <>{
        starship.isLoading
            ? <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
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
