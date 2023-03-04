import React, { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [search,setSearch] = useState('');
    const navigate = useNavigate();
   
    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+search)
    }
  return (
    <>
    <div className=" flex items-center justify-center mb-10">
            <form action="" onSubmit={onSubmitHandler}>
        <div className=" border border-orange-500 w-96 flex justify-between items-center">
                <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search here"
                className="input w-full max-w-xs" /> 
             <div className=" mr-6 text-xl">
                <FiSearch />
             </div>
        </div>
            </form>
    </div>
    </>
  )
}

export default Search
