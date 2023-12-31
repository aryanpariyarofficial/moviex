import { useState, useEffect } from 'react'
import './App.css'
import fetchDataFromApi from './utils/api'
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';
function App() {

  // const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>state.home);
  
  
  useEffect(()=>{
    apiTesting()
  },[])
  const apiTesting = () =>{
    fetchDataFromApi('/movie/popular').then((res)=>{
      console.log(res)
      dispatch(getApiConfiguration(res));
    })
  }

  return (
    <>
      <h1 className='text'>Hello Buddies !!

        {url?.total_pages}
      </h1>
    </>
  )
}

export default App
