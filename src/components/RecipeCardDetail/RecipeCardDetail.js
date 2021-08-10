import React from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import "./style.css"

function RecipeCardDetail() {
    const { recipeId } = useParams()
    const location = useLocation()
    const { recipes } = location.state
    const recipe = recipes[recipeId].recipe


    return (
        <div className="wrapper">
            <Link to="/" className="menu-link">Menu</Link>
            <img src={recipe.image} alt="recipe-image" className="image"></img>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredientLines.map((item,key) => (
                    <li key={key}>{item}</li>
                ))}
            </ul>
            <h3>Health Labels</h3>
            <ul>
                {recipe.healthLabels.map((item, key) =>
                    <li key={key}>{item}</li>)}
            </ul>
        </div>
    )
}

export default RecipeCardDetail
