import {useParams, useHistory} from 'react-router-dom'
import {getMealById} from '../api'
import {useEffect, useState} from 'react';
import {Preloader} from '../components/Preloader'

function Recipe() {
  const [recipe, setRecipe] = useState([])
  const {id} = useParams();
  const {goBack} = useHistory();

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]))
  },[id]);
  return <>

    {
      !recipe.idMeal ? <Preloader /> : (
        <div className='recipe'>
          <img src={recipe.strMealThumb} alt="img" />
          <h1>{recipe.strMeal}</h1>
          <h6>{recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: <strong>{recipe.strArea}</strong></h6> : null  }
          <p>{recipe.strInstructions}</p>
          <table className='centered'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(recipe).map(key => {
                  if(key.includes('Ingredient') && recipe[key]){
                    return (
                      <tr key={key}>
                        <td>
                          {recipe[key]}
                        </td>
                      <td>
                        {recipe[`strMeasure${key.slice(13)}`]}
                      </td>
                      </tr>
                    )
                  }
                  else{
                    return null
                  }
                })
              }

            </tbody>
          </table>


          {recipe.strYoutube ? (
            <>
            <div className='row'>
              <h5>Video recipe</h5>
              <iframe  title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
            </div>
            <button className="btn" onClick={goBack}>Goback</button>
            </>
          )

          : null}
        </div>
      )
    }

  </>
}
export {Recipe}