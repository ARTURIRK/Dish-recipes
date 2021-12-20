
import {Meal} from './Meal'

function MealsList({meals}) {
  return <div className="list">
    {meals.map((item) => <Meal key={item.idMeal}  {...item}/>)}
  </div>
}

export {MealsList}