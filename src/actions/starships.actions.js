import  axios from 'axios'
import {StarshipsActions} from "../constants";

export const getStarships = () => {
    return (dispatch) => {
        dispatch(getStarshipsStarted());
        axios.get('https://swapi.dev/api/starships')
            .then(res => { dispatch(getStarshipsSuccess(res.data.results))})
            .catch(error => {dispatch(getStarshipsError(error))})
    }
};

const getStarshipsStarted = () => ({
    type: StarshipsActions.STARSHIPS_REQUEST
});

const getStarshipsSuccess = (starships) => ({
    type: StarshipsActions.STARSHIPS_REQUEST_SUCCESS,
    payload: starships
});

const getStarshipsError = (error) => ({
    type: StarshipsActions.STARSHIPS_REQUEST_ERROR,
    payload: error
});
