import { combineReducers } from "redux";
import starships from "./starships.reducer";
import starship from "./starship.reducer"
import planets from "./planets.reducer";
import planet from "./planet.reducer"
import heroes from "./heroes.reducer";
import hero from "./hero.reducer"


const rootReducer = combineReducers({
    starships,
    starship,
    planets,
    planet,
    heroes,
    hero
});

export default rootReducer
