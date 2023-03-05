import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from './Layout'
import { motion } from 'framer-motion'

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
                <motion.div
                    animate={{opacity:1}}
                    initial={{opacity:0}}
                    exit={{opacity:0}}
                    transition={{duration : 0.6}}
                 key={recipe.idMeal} className='card w-80 relative rounded-xl border border-orange-400 p-6 shadow-lg shadow-orange-500'>
                    <img className=' hover:opacity-60 rounded-lg' src={recipe.strMealThumb} alt="" />
                    <p className='text-black text-xl font-bold mt-2'>{recipe.strMeal.substring(0,20)}...</p>
                </motion.div>
                </Link>
            )
        })}
    </div>
        </>
  )
}

export default Cuisine
