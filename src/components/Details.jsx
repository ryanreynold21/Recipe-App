import React from 'react'

const Details = ({item}) => {
    console.log(item)
    const {strMeal,strInstructions,strArea,strMealThumb,strYoutube} = item;
  return (
    <div className='lg:flex sm:flex justify-center'>
        <div className="">
          <h1 className=' text-center text-orange-500 text-xl font-bold mb-8'>{strMeal}</h1>
          <img src={strMealThumb} className=' w-[300px]' alt="" />
          <p className=' text-xl font-bold mt-8 text-orange-500'>Country - {strArea}</p>
          <button className=' px-4 py-2 border border-orange-500 hover:bg-orange-500 hover:text-white rounded-md mt-6'>
          <a href={strYoutube}>Watch on Youtube ..</a>
          </button>
        </div>
        <div className=" w-[500px] text-left ml-10 p-2">
            <p className=' text-lg text-orange-600'>{strInstructions}</p>
        </div>
    </div>
  )
}

export default Details
