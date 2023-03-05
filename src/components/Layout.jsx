import React from 'react'
import Category from './Category'
import Search from './Search';
import {CiForkAndKnife} from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Link to={'/'}>
      <div className=" flex gap-3 text-3xl pt-7 pl-11 cursor-pointer">
      <CiForkAndKnife className=''/>
      <h1 className=' italic'>Delicious</h1>
    </div>
    </Link>
     <Category /> 
     <Search />
    </>
  )
}

export default Layout
