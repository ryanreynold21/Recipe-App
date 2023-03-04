import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

const Popular = () => {
    const [popular,setPopular] = useState([]);

    const getMeal = async () => {
            const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
            setPopular(data.meals)
    }

    useEffect(() => {
        getMeal()
    },[])

  return (
    <div>
    <Layout />
    <div className='flex flex-wrap rounded gap-5 text-center'>
        {popular?.map(recipe => {
            return(
                <Link to={`/recipe/`+recipe.idMeal}>
                    <div className='card w-80 relative rounded-xl border border-orange-400 p-6 shadow-lg shadow-orange-500' key={recipe.idMeal}>
                        <p className='absolute text-emerald-300 bottom-4 md:right-36 sm:right-0 text-2xl font-bold'>{recipe.strMeal}</p>
                        <img className=' hover:opacity-60 rounded-lg' src={recipe.strMealThumb} alt="" />
                    </div>
                </Link>
            )
        })}
    </div>
        </div>
  )
}

export default Popular
