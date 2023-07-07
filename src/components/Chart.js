import {React, useContext } from 'react'
import Plot from 'react-plotly.js';
import { AppContext } from '../context/AppContext';

const Chart = () => {
    const data = [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 3, 2, 4, 3],
          mode: 'lines',
          name: 'Users',
          line: {
            shape: 'spline',
          },
        },
        {
          x: [1, 2, 3, 4, 5],
          y: [2, 1, 4, 3, 5],
          mode: 'lines',
          name: 'Guest',
          line: {
            shape: 'spline',
          },
        },
      ];
      const {setGuest,setUsers} = useContext(AppContext);
      setGuest(data[0].name);
      setUsers(data[1].name);


      const layout = {
        autosize: false,
        showlegend: false,
        
        margin: {
          l: 30,
          r: 0,
          t: 30,
          b: 30,
        },
        width:950,
        height:212,
        displayModeBar: false
       
      };
    

  return (
        

        <div className='w-[62.5rem] h-[20.44rem] rounded-[30px] bg-white flex flex-col'>
            <div className='flex flex-row justify-between mt-[1.87rem] mx-[2.5rem]'>
                <div  className='z-10 flex flex-col'>  
                        <div className='text-[1.125rem] ml-[0.3rem] font-bold'>Activities</div>
                        <select className='text-[0.825em] text-[#858585]'  value='2023-07-01'>
                        <option value="2023-07-01">July 1, 2023</option>
                        <option value="2023-07-02">July 2, 2023</option>
                        <option value="2023-07-03">July 3, 2023</option>
                        </select>
                    </div>
                
                    <div className='flex flex-row gap-5 text-[14px]'>
                        <div className='flex flex-row  z-10 items-center  justify-center gap-2'>
                            <div className='h-[8px] w-[8px] rounded-[100%] bg-blue-500'></div>
                            <div>Guest</div>
                        </div>
                        <div className='flex flex-row  z-10 items-center justify-center gap-2'>
                            <div className='h-[8px] w-[8px] rounded-[100%] bg-orange-500'></div>
                            <div>Users</div>
                        </div>
                    </div>
            </div>
            
            
            <Plot className='mx-[1.3rem] ' data={data} layout={layout}  />;

        </div>
        

  )
}

export default Chart






