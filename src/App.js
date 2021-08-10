import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard/RecipeCard';
import RecipeCardDetail from "./components/RecipeCardDetail/RecipeCardDetail"
import Form from './components/Form/Form';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([])
  const [filter, setFilter] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    getRecipe()
  }, [query])

  const getRecipe = () => {
    const key = process.env.REACT_APP_RECIPE_SEARCH_APP_API_KEY
    const id = process.env.REACT_APP_RECIPE_SEARCH_APP_ID
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${id}&app_key=${key}`)
      .then(response => {
        console.log(response.data.hits)
        setRecipes(response.data.hits)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Form setFilter={setFilter} setQuery={setQuery} filter={filter} />
          <div className="row">
            <Switch>
              <Route path="/recipe-card-detail/:recipeId" >
                <RecipeCardDetail />
              </Route>
              <Route exact path="/" >
                {recipes.map((item, id) => {
                  return <RecipeCard key={id} img={item.recipe.image} title={item.recipe.label} ingredients={item.recipe.ingredientLines} recipeId={id} recipes={recipes} />
                })}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
