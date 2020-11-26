import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getHeroes} from "../../actions";
import HeroesListItem from "./heroes-list-item";

const HeroesList = ({ heroes, getHeroes}) => {
    useEffect(() => {
        getHeroes()
    }, [getHeroes]);
    return (
        <div>
            <ul>
                {
                    heroes.heroes.map(hero =>
                        <HeroesListItem
                            key={hero.name}
                            hero={hero}
                        />
                    )
                }
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    heroes: state.heroes
});

const mapDispathToProps =  dispatch => ({
    getHeroes: () => dispatch(getHeroes())
});

export default connect(mapStateToProps,mapDispathToProps)(HeroesList)
