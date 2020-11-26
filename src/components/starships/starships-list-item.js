import React from 'react'
import {Link} from "react-router-dom";

const StarshipListItem = ({starship}) => {
    return (
            <Link to={`/starships/${starship.name}`} className={"item-text"}>
                {starship.name}
            </Link>
    )
};

export default StarshipListItem;
