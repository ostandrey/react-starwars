import { combineReducers } from "redux";
import starships from "./starships.reducer";
import starship from "./starship.reducer"
import planets from "./planets.reducer";
import heroes from "./heroes.reducer"

const rootReducer = combineReducers({
    starships,
    starship,
    planets,
    heroes
});

export default rootReducer
