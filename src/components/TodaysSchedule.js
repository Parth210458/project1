import React from 'react'
import arrow from '../assets/arrow.png'

const TodaysSchedule = () => {
    const info = [
        {
            title:'Meeting with Suppliers from Kuta Bali',
            stime: '14:00',
            etime: '15:00',
            location: 'Sunset road, Kuta, Bali',
            color:'#6972C3'
        },
        {
            title:'Check operation at Giga Factory 1',
            stime: '18:20',
            etime: '15:00',
            location: 'Central Jakarata',
            color:'#9BDD7C'
        }
    ]
  return (
    <div className='relative w-[480px] h-[256px] flex flex-col pl-[4%] pr-[4%] bg-white rounded-[30px] gap-[22px]'>
        <div className='flex flex-row justify-between mt-[6%]'>
            <div className='font-bold text-[18px]'>Today's schedule</div>
            <button className='text-[12px] flex flex-row items-center gap-1'>
                <div>See All</div>
                <img src={arrow}/>
            </button>
        </div>
        
        <div className='flex flex-col gap-[13px]'>
            {
                info.map( (curr)=>{
                    return(
                        <div className='flex flex-row  w-[300px]'>
                            <div className={`bg-[${curr.color}] h-[100%] w-[1.5%]`}></div>
                            <div className='ml-[7px]'>
                                <p className='text-[14px] font-bold'>{curr.title}</p>
                                <p className='text-[12px] text-[#999999]'>{curr.stime}<span>-</span>{curr.etime}</p>
                                <p className='text-[12px]  text-[#999999]'>{curr.location}</p>
                            </div>
                            
                        </div>
                        
                    );
                })
            }
        </div>
        
      


    </div>
  )
}

export default TodaysSchedule
