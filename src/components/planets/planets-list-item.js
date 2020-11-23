import React from 'react'
import {Link} from "react-router-dom";

const PlanetsListItem = ({planet}) => {
    return (
        <li>
            <Link to={`/planets/${planet.name}`}>{planet.name}</Link>
        </li>
    )
};

export default PlanetsListItem