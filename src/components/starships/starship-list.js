import React, {useEffect} from 'react'
import StarshipItem from "./starship-item";
import {getStarships} from "../../actions";
import { connect } from 'react-redux'

const StarshipList = ({getStarships}) => {
    useEffect(() => getStarships());
    return (
        <div>
            <StarshipItem/>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    getStarships: () => {
        dispatch(getStarships())
    }
});

export default connect(
    null,
    mapDispatchToProps
)(StarshipList)
