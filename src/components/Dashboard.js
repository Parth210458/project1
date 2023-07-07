import React, { useState } from 'react'
import {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import Card from '../components/Card'
import Chart from './Chart'
import TopProducts from './TopProducts.js'
import TodaysSchedule from "./TodaysSchedule";
import dashboard from '../assets/dashboard.png'
import setting from '../assets/setting.png'
import transection from '../assets/transection.png'
import users from '../assets/users.png'
import schedules from '../assets/schedules.png'

import likes from '../assets/likes.png' 
import revenues from '../assets/revenues.png'
import total_users from '../assets/total_users.png'
import total_transections from '../assets/total_transections.png'

import search from '../assets/search.png'
import bell from '../assets/bell.png'
import profile from '../assets/profile.png'
import {AppContext} from '../context/AppContext'


const Dashboard = () => {
    const {title,voteCount,voteAverage,popularity, revenue, getData} = useContext(AppContext)

    const cards = [
        {
            id:1,
            title: 'Total revenues',
            price:revenue,
            icon: revenues
        },
        {
            id:2,
            title: 'Popularity',
            price:popularity,
            icon: total_transections
        },
        {
            id:3,
            title: 'Vote Counts',
            price:voteCount,
            icon: likes
        },
        {
            id:4,
            title: 'Ratings',
            price:voteAverage,
            icon: total_users
        }
    ]
    
    const [searchMovie, setSearchMovie] = useState('');
    function searchMovieHandler(e){
        
        setSearchMovie(e.currentTarget.value);
    }

    function getSearchMovieHandler(){
        console.log(searchMovie);
        getData(searchMovie);
    }
  return (
    <div className='flex flex-row justify-center font-montserrat w-[100%] h-[100%]' >

      <div className='bg-black rounded-[30px] gap-[4.89%] text-white w-[19.44%] h-[100vh] flex flex-col item-center text-left  m-[2%]'>
        <div className='text-[2.4em] mt-[16.36%] ml-[17.86%]' >Board.</div>
        
        <div className='flex flex-col gap-[1.5rem] ml-[17.86%] text-[1em] font-montserrat'>
            <NavLink to='#'>
                <div className='flex flex-row items-center gap-1'>
                    <img src={dashboard} className='h-[17.54px] w-[17.54px]'/>
                    <div >Dashboard</div>
                </div>
            </NavLink>
           
            <NavLink to='#'>
                <div className='flex flex-row items-center gap-1'>
                    <img src={transection} className='h-[17.54px] w-[17.54px]'/>
                    <div>Transections</div>
                </div>
            </NavLink>

            <NavLink to='#'>
                <div className='flex flex-row items-center gap-1'>
                    <img src={schedules} className='h-[17.54px] w-[17.54px]'/>
                    <div>Schedules</div>
                </div>
            </NavLink>

            <NavLink to='#'>
                <div className='flex flex-row items-center gap-1'>
                    <img src={users} className='h-[17.54px] w-[17.54px]'/>
                    <div>Users</div>
                </div>
            </NavLink>

            <NavLink to='#'>
                <div className='flex flex-row items-center gap-1'>
                    <img src={setting} className='h-[17.54px] w-[17.54px]'/>
                    <div>Settings</div>
                </div>
            </NavLink>
        </div>
        
        
      </div>

      <div className='mt-[2.86%] m-[2rem]  flex flex-col gap-y-[2%]'>
            <div className='flex felx-row justify-between items-center '>
                <div className='text-[1.5rem] font-bold'>{title}</div>
                
                <div className='flex flex-row gap-[1.5rem] '>
                    <div className='relative w-[11.25rem] h-[1.9rem] mr-[1.5rem] flex flex-row'>
                        <input className='rounded-[30px]' type='text' onChange={searchMovieHandler}></input>
                        <button onClick={getSearchMovieHandler} className='absolute z-10 w-[13px] h-[12px] ml-[153px] mt-[9px] '><img className=' ' src={search} alt="" /></button> 
                        <p className='absolute text-[0.75rem] font-[##B0B0B0] flex pl-[0.6rem] py-[0.4rem]'>Search Movies..</p>
                    </div>
                    
                    <img className='w-[18px] h-[20px] mt-[4px]' src={bell}/>
                    <img className='h-[30px] w-[30px] rounded-[100%]' src={profile}/>
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                {
                    cards.map((card)=>{
                        return<Card card={card} />
                    })
                }
            </div>

            <Chart/>

            <div className='flex flex-row justify-between'>
                <TopProducts/>
                <TodaysSchedule/>
            </div>
      </div>
    </div>
  )
}

export default Dashboard
