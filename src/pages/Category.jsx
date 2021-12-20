import { useParams, useHistory } from "react-router-dom";
import {getFilteredCategory} from '../api'
import {useState, useEffect} from "react";
import {Preloader} from '../components/Preloader'
import {MealsList} from '../components/MealsList'

function Category(){
  const {goBack} = useHistory()
  const {name} = useParams();
  const [meals, setMeals] = useState([])
  useEffect(() => {
    getFilteredCategory(name)
    .then(data => setMeals(data.meals))
  },[name])
  return <>
  <button className="btn" onClick={goBack}>GoBack</button>
  {
    !meals.length ? <Preloader /> : <MealsList meals={meals} />
  }
  </>
}

export {Category}