import React from 'react'
import { Ingredients } from './data.js';


export default class IngredientCard extends React.Component {
    render() {
        const IngredientList = Ingredients.map((ingredientItem) => {
            return (
                <div className="ingredient-list">
                    <p>Ingredient: {ingredientItem.name} Amount: {ingredientItem.amount} </p>
                </div>
            )
        })
        return (IngredientList)
    }
}