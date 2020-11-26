import axios from 'axios'
import { StarshipActions } from "../constants"

export const getStarship = (url) => {
    return (dispatch) => {
        dispatch(getStarshipStarted());
        axios.get(url)
            .then( res => {dispatch(getStarshipSuccess(res.data))})
            .catch(error => {dispatch(getStarshipError(error))})
    }
};

const getStarshipStarted = () => ({
    type: StarshipActions.STARSHIP_REQUEST
});

const getStarshipSuccess = (starship) => ({
    type: StarshipActions.STARSHIP_REQUEST_SUCCESS,
    payload: starship
});

const getStarshipError = (error) => ({
    type: StarshipActions.STARSHIP_REQUEST_ERROR,
    payload: error
});
