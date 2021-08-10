import React from 'react'
import "./style.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"

function RecipeCard( { img, title, ingredients, recipeId, recipes } ) {
    
    
    return (
            <div className="col-xl-4 col-md-6 col-s-12">
                <div className="card mt-5" style={{ width: "24rem" }}>
                    <img src={img} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h3 className="text align">{title}</h3>
                        <ul className="card-text">
                            {ingredients.map((item, id) => {
                                return <li key={id} >{item}</li>
                            })}
                        </ul>
                        <Link to={{
                            pathname:`/recipe-card-detail/${recipeId}`,
                            state:{
                                recipes: recipes}
                            }}>Details</Link>
                    </div>
                </div>
            </div>
    )
}
export default RecipeCard