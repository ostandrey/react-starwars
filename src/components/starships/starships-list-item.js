import React from 'react'
import {Link} from "react-router-dom";

const StarshipListItem = ({starship}) => {
    return (
        <li>
            <Link to={`/starships/${starship.name}`}>
                {starship.name}
            </Link>
        </li>
    )
};

export default StarshipListItem;
