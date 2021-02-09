import React from 'react'

const Ingredients = [
    {
        name: 'Milk',
        amount: '1-1/2 Cups',
    },{
        name: 'Mascarpone',
        amount: '1/2 Cup',
    },{
        name: 'Pink Salt',
        amount: '1/2 tsp',
    }
]

export default class IngredientCard extends React.Component{
    render(){
        const IngredientList = Ingredients.map((ingredientItem) => {return(
            <div>
                <p>Ingredient: {ingredientItem.name} Amount: {ingredientItem.amount} </p>
            </div>
        )})
        return (IngredientList)
        }}