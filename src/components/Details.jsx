import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Details = ({item}) => {
    const {strMeal,strInstructions,strArea,strMealThumb,strYoutube} = item;
    const [activeTab,setActiveTab] = useState("instruction")
     const imageVatiants = {
      hidden:{x:'-100vw'},
      visible:{
        x:0,
        transition:{duration:2}
      }
    }

  const contentVatiants = {
    hidden:{x:'100vw'},
    visible:{
      x:0,
      transition:{duration:2}
    }
  }
  return (
    <div className='lg:flex sm:flex justify-center'>
        <motion.div
        variants={imageVatiants}
        initial='hidden'
        animate='visible'
        className="">
            <h1 className=' text-center text-orange-500 text-xl font-bold mb-8'>{strMeal}</h1>
            <img src={strMealThumb} className=' w-[300px]' alt="" />
            <p className=' text-xl font-bold mt-8 text-orange-500'>Country - {strArea}</p>
            <button className=' px-4 py-2 border border-orange-500 hover:bg-orange-500 hover:text-white rounded-md mt-6 mb-4'>
            <a href={strYoutube}>Watch on Youtube ..</a>
            </button>
        </motion.div>
        <motion.div
         variants={contentVatiants}
        initial='hidden'
        animate='visible'
        className=" w-[500px] text-left ml-10 p-2">
            <div className=" flex gap-6 mb-3">
              <button
                onClick={() => setActiveTab('instruction')}
                className={activeTab === 'instruction' ? ' px-4 rounded-md py-2 bg-orange-400 text-white' : ' px-4 rounded-md py-2 border border-orange-800  text-black'} 
                >Instruction</button>
              <button
              onClick={() => setActiveTab('ingredient')}
              className={activeTab === 'ingredient' ? ' px-4 rounded-md py-2 bg-orange-400 text-white' : ' px-4 rounded-md py-2 border border-orange-800  text-black'} 
              >Ingredients</button>
            </div>

          {activeTab === 'instruction' && <p className=' text-lg text-orange-600'>{strInstructions}</p>}
          {activeTab === 'ingredient' && (
            <ul>
              <li>{item.strIngredient1}</li>
              <li>{item.strIngredient2}</li>
              <li>{item.strIngredient3}</li>
              <li>{item.strIngredient4}</li>
              <li>{item.strIngredient5}</li>
              <li>{item.strIngredient6}</li>
              <li>{item.strIngredient7}</li>
              <li>{item.strIngredient8}</li>
              <li>{item.strIngredient9}</li>
              <li>{item.strIngredient10}</li>
              <li>{item.strIngredient11}</li>
              <li>{item.strIngredient12}</li>
              <li>{item.strIngredient13}</li>
              <li>{item.strIngredient14}</li>
              <li>{item.strIngredient15}</li>
              <li>{item.strIngredient16}</li>
              <li>{item.strIngredient17}</li>
              <li>{item.strIngredient18}</li>
              <li>{item.strIngredient19}</li>
              <li>{item.strIngredient20}</li>
            </ul>

          )}
            
        </motion.div>
    </div>
  )
}

export default Details
