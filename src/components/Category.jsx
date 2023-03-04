import React from 'react';
import {GiChickenOven,GiLindenLeaf,GiIceCreamCone} from 'react-icons/gi';
import {MdFreeBreakfast} from 'react-icons/md';
import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <div className=" flex items-center justify-center">
        <div className=' flex gap-6 mt-10 mb-4'>
            <NavLink to={'/meal/chicken'}>
            <div className=" flex items-center justify-center flex-col cursor-pointer">
                <div className=" text-2xl border border-orange-400  p-4 hover:bg-orange-400 hover:text-white rounded-full">
                    <GiChickenOven />
                </div>
                <h3>Chicken</h3>
            </div>
            </NavLink>
            <NavLink to={'/meal/Vegetarian'}>
           <div className=" flex items-center justify-center flex-col cursor-pointer">
                <div className=" text-2xl border border-orange-400 p-4 hover:bg-orange-400 hover:text-white  rounded-full">
                    <GiLindenLeaf />
                </div>
                <h3>Vegetarian</h3>
            </div>
            </NavLink>
            <NavLink to={'/meal/Dessert'}>
            <div className=" flex items-center justify-center flex-col cursor-pointer">
                <div className=" text-2xl border border-orange-400  p-4 hover:bg-orange-400 hover:text-white rounded-full">
                    <GiIceCreamCone />
                </div>
                <h3>Dessert</h3>
            </div>
            </NavLink>
            <NavLink to={'/meal/Breakfast'}>
            <div className=" flex items-center justify-center flex-col cursor-pointer">
                <div className=" text-2xl border border-orange-400  p-4 hover:bg-orange-400 hover:text-white rounded-full">
                    <MdFreeBreakfast />
                </div>
                <h3>Breakfast</h3>
            </div>
            </NavLink>

        </div>
    </div>
    
  )
}

export default Category
