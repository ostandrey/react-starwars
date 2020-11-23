import React, {useEffect} from 'react'
import StarshipListItem from "./starships-list-item";
import {getStarships} from "../../actions";
import { connect } from 'react-redux'

const StarshipsList = ({starships, getStarships}) => {
    useEffect(() => {
        getStarships()
    }, [getStarships]);
    return (
        <div>
            <ul>
                {
                    starships.starships.map(starship =>
                        <StarshipListItem
                            key={starship.name}
                            starship={starship}
                        />)
                }
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    starships: state.starships
});


const mapDispatchToProps = dispatch => ({
    getStarships: () => {
        dispatch(getStarships())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StarshipsList)
