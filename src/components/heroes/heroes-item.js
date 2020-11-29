import React from 'react'
import {connect} from 'react-redux'

const HeroesItem = ({hero, state}) => {
    return (
        <>{
            hero.isLoading
                ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                : <div className={"item-info"}>
                    <h2>{hero.hero.name}</h2>
                    <div className="dropdown-divider"/>
                    <h3>Birth year: {hero.hero.birth_year}</h3>
                    <h3>Eye color: {hero.hero.eye_color}</h3>
                    <h3>Gender: {hero.hero.gender}</h3>
                    <h3>Hair color: {hero.hero.hair_color}</h3>
                    <h3>Height: {hero.hero.height}</h3>
                    <h3>Mass: {hero.hero.mass}</h3>
                    <h3>Skin color: {hero.hero.skin_color}</h3>
                </div>

        }</>
    )
};

const mapStateToProps = state => ({
    hero: state.hero,
    state
});

export default connect(mapStateToProps, null)(HeroesItem);
