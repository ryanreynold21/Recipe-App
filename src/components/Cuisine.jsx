import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Category from './Category'
import Layout from './Layout'

const Cuisine = () => {
    let params = useParams();
    const [cuisine,setCuisine] = useState([]);
    
    const getMeal = async (name) => {
         const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
         setCuisine(data.meals)
    }

   useEffect(() => {
   getMeal(params.type);
   },[params.type])
  return (
        <>
        <Layout />
       <div className='flex flex-wrap rounded gap-5 text-center'>
        {cuisine?.map(recipe => {
            return(
                <Link to={`/recipe/`+recipe.idMeal}>
                <div key={recipe.idMeal} className='card w-80 relative rounded-xl border border-orange-400 p-6 shadow-lg shadow-orange-500'>
                    <p className='absolute text-emerald-300 bottom-4 md:right-36 sm:right-0 text-2xl font-bold'>{recipe.strMeal}</p>
                    <img className=' hover:opacity-60 rounded-lg' src={recipe.strMealThumb} alt="" />
                </div>
                </Link>
            )
        })}
    </div>
        </>
  )
}

export default Cuisine
