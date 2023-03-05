import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout';
import { motion } from 'framer-motion'; 

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
                    <motion.div
                    animate={{opacity:1}}
                    initial={{opacity:0}}
                    exit={{opacity:0}}
                    transition={{duration : 0.6}}
                    className='card w-80 rounded-xl border border-orange-400 p-6 shadow-lg shadow-orange-500' key={recipe.idMeal}>
                        <img className=' hover:opacity-60 rounded-lg' src={recipe.strMealThumb} alt="" />
                        <p className='text-black text-xl font-bold mt-2'>{recipe.strMeal.substring(0,20)}...</p>
                    </motion.div>
                </Link>
            )
        })}
    </div>
        </div>
  )
}

export default Popular
