
import { useEffect, useContext } from 'react';

import { BrowserRouter, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {AppContext} from "./context/AppContext";
import "react-toastify/dist/ReactToastify.css";


import Dashboard from './components/Dashboard'
import Loader from './components/Loader';

import './App.css';


function App() {

  const {getData,loading} = useContext(AppContext);

  useEffect(()=>{
    getData();
  },[])


  return (
    
     
      <div className='bg-[#F5F5F5] h-[100%] w-[100%]'>
     <ToastContainer/>
    {

      loading ? (<div className='h-[100vh] w-[100vw] flex justify-center items-center  '><Loader/></div>):(<Dashboard/>)
    }
    
  </div>
     
   
    
  );
}

export default App;
