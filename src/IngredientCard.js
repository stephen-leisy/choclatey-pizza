import React from 'react'

const Ingredients = [
    {
        name: 'Milk',
        amount: '1-1/2 Cups',
    }, {
        name: 'Mascarpone',
        amount: '1/2 Cup',
    }, {
        name: 'Pink Salt',
        amount: '1/2 tsp',
    }, {
        name: 'Black Mission Figs',
        amount: '1 lb',
    }, {
        name: 'brown Sugar',
        amount: '1/2 Cup',
    }, {
        name: 'water',
        amount: '2-4 tbsp',
    }, {
        name: 'Heavy Cream',
        amount: '1-1/2 Cups',
    }, {
        name: 'granulated sugar',
        amount: '1/3 Cup',
    }, {
        name: 'egg yolks',
        amount: '2',
    }, {
        name: 'lemon (juiced)',
        amount: '1',
    }, {
        name: 'butter',
        amount: '2 tbsp',
    }, {
        name: 'honey roasted pecans, roughly chopped',
        amount: '1 cup',
    }
]

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