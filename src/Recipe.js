import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
    return (
        <div className={style.recipe_details}>
            <h1>{props.title}</h1>
            <p>Calories: {props.calories.toFixed()} cal</p>
            <ol>
                {props.ingredients.map( ingredient => (
                    <li> {ingredient.text}  </li> 
                ))}
            </ol>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Recipe;