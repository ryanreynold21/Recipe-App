import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import Layout from '../components/Layout'

const Recipe = () => {
    let params = useParams();
    const [details,setDetails] = useState();
    const getDetails = async () => {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        setDetails(data.meals)
    };

    useEffect(() => {
        getDetails()
    },[])
  return (
    <>
    <Layout />
     {details?.map(item => <Details key={item.idMeal} item={item} />)}
    </>
  )
}

export default Recipe
