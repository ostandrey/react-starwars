import React, {useEffect} from 'react'
import StarshipListItem from "./starships-list-item";
import {getStarships, getStarship} from "../../actions";
import { connect } from 'react-redux'

const StarshipsList = ({starships, getStarships, getStarship}) => {
    useEffect(() => {
        getStarships()
    }, [getStarships]);
    return (
        <>{
            starships.isLoading
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
                            starships.starships.map(starship =>
                                <li onClick={() => {getStarship(starship.url)}}>
                                    <StarshipListItem
                                        key={starship.name}
                                        starship={starship}
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
    starships: state.starships
});


const mapDispatchToProps = dispatch => ({
    getStarships: () => {
        dispatch(getStarships())
    },
    getStarship: (url) => {
        dispatch(getStarship(url))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StarshipsList)
