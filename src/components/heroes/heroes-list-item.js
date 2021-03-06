import React from 'react'
import {Link} from "react-router-dom";

const HeroesListItem = ({hero}) => {
    return(
        <li>
            <Link to={`/heroes/${hero.name}`} className={"item-title"}>{hero.name}</Link>
        </li>
    )
};

export default HeroesListItem
