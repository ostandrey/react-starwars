import React from 'react'
import {Link} from "react-router-dom";

const PlanetsListItem = ({planet}) => {
    return (
        <li>
            <Link to={`/planets/${planet.name}`} className={"item-title"}>{planet.name}</Link>
        </li>
    )
};

export default PlanetsListItem
