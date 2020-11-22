import React, {useEffect} from 'react'
import StarshipItem from "./starship-item";
import {getStarships} from "../../actions";
import { connect } from 'react-redux'

const StarshipList = ({starships, getStarships}) => {
    useEffect(() => {
        getStarships()
    }, [getStarships]);
    return (
        <div>
            <ul>
                {
                    starships.starships.map(starship =>
                        <StarshipItem
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
)(StarshipList)
