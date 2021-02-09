import React from 'react'
import { Ingredients } from './data.js';


export default class IngredientCard extends React.Component {
    render() {
        const IngredientList = Ingredients.map((ingredientItem) => {
            return (
                <div className="ingredient-list">
                    <p className="ingredient">Ingredient: {ingredientItem.name}</p> 
                    <p className="ingredient-amount">Amount: {ingredientItem.amount}</p>
                </div>
            )
        })
        return (IngredientList)
    }
}