import {API_URL} from './config'

const getMealById = async (mealId) => {
 const response =  await fetch(API_URL + 'lookup.php?i=' + mealId)
  return response.json();
}
const getAllCategories = async () => {
  const response =  await fetch(API_URL +'categories.php');
  return response.json();
 };

 const getFilteredCategory = async (catName) => {
  const response =  await fetch(API_URL + 'filter.php?c='+catName)
   return response.json();
 }

export { getMealById, getAllCategories, getFilteredCategory};