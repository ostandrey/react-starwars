import React from 'react'

const StarshipItem = ({starship}) => {
    return (
        <li>
            <h2>{starship.name}</h2>
        </li>
    )
};

export default StarshipItem;
