import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import Spinner from './layout/spinner';

const App = () => {
  const APP_ID ='4ce2ad91';
  const APP_KEY='b4416ecef223149339a9631c948502ac';

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');

  const [loader,setloader] = useState(true);

  useEffect(() => {
    getRecipes()
  },[query]);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
              .then(function(res) {
                   return res.json()
              } )
              .catch(error => console.error(error))
  
      setRecipes(response.hits)
      setloader(false)
  };

  const updateSearch = e => {
      setSearch(e.target.value)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

    setloader(true)
  };
     
            return (
                <div className="App">
                    <form onSubmit={getSearch} className="search-form">
                      <input className="search-bar" type="text" value={search}  onChange={updateSearch}/>
                      <button className="search-button" type="submit">
                        search
                      </button>
                    </form>
                    {loader && <Spinner/>}
                    <div className="recipe">
                        {recipes.map(recipe => (
                            <Recipe 
                            key = {recipe.recipe.label}
                            title = {recipe.recipe.label} 
                            calories = {recipe.recipe.calories} 
                            image = {recipe.recipe.image}
                            ingredients ={recipe.recipe.ingredients}
                            />
                        ))}
                    </div>
                </div>
              );
            
};
 
export default App;