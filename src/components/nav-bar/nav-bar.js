import React, {useState} from 'react'
import {Link} from "react-router-dom";
import classnames from "classnames";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('starships');
    return (
        <div className="nav-bar">
                <span className={'nav-btn'} onClick={() => {setActiveLink('heroes')}}>
                    <Link to={'/heroes'}
                          className={classnames("nav-btn-text", {"nav-btn-select": activeLink === 'heroes'})}>
                        Heroes
                    </Link>
                </span>
            <span className={'nav-btn'} onClick={() => {setActiveLink('planets')}}>
                    <Link to={'/planets'}
                          className={classnames("nav-btn-text", {"nav-btn-select": activeLink === 'planets'})}>
                        Planets
                    </Link>
            </span>
            <span className={'nav-btn'} onClick={() => {setActiveLink('starships')}}>
                    <Link to={'/starships'}
                          className={classnames("nav-btn-text", {"nav-btn-select": activeLink === 'starships'})}>
                        Starships
                    </Link>
            </span>
        </div>
    )
};

export default NavBar
