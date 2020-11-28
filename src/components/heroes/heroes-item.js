import React from 'react'
import {connect} from 'react-redux'

const HeroesItem = ({hero, state}) => {
    return (
        <>{
            hero.isLoading
                ? <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                : <li>
                    <h2>{hero.hero.name}</h2>
                </li>
        }</>
    )
};

const mapStateToProps = state => ({
    hero: state.hero,
    state
});

export default connect(mapStateToProps, null)(HeroesItem);
