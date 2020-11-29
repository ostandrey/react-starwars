import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getHeroes, getHero} from "../../actions";
import HeroesListItem from "./heroes-list-item";

const HeroesList = ({ heroes, getHeroes, getHero}) => {
    useEffect(() => {
        getHeroes()
    }, [getHeroes]);
    return (
        <>{
            heroes.isLoading
            ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
                <div>
                    <ul>
                        {
                            heroes.heroes.map(hero =>
                                <li onClick={() => {getHero(hero.url)}}>
                                    <HeroesListItem
                                        key={hero.name}
                                        hero={hero}
                                    />
                                </li>

                            )
                        }
                    </ul>
                </div>
        }</>

    )
};

const mapStateToProps = state => ({
    heroes: state.heroes
});

const mapDispathToProps =  dispatch => ({
    getHeroes: () => dispatch(getHeroes()),
    getHero: (url) => {
        dispatch(getHero(url))
    }
});

export default connect(mapStateToProps,mapDispathToProps)(HeroesList)
