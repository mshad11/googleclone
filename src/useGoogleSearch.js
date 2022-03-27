import React, { useEffect, useState } from 'react'
import API_KEY from './Key';
const CONTEXT_KEY = "338a94c38997c03b9";

const useGoogleSearch = (term) => {

  //useState is created to store the data that is coming from API
  const[data,setData] = useState(null);


  //in useEffect we are getting the data and stored in data
  useEffect(() => {
   const fetchData = async () => {
     fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q={term}`)
     .then(response => response.json())
     .then(result => {
       setData(result)
      }) 
   }
    fetchData().then(res => {
      console.log(res)
    }).catch(error => {console.log(error)
    });

  },[term])   
  return {data};

}


export default useGoogleSearch;
