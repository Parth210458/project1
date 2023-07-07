import React from 'react';
import Plot from 'react-plotly.js';

const TopProducts = () => {
  const data=[10,20,30,0,50,100,]
  const chartData = [{
    values: data,
    type: 'pie',
    
    marker: {
      colors: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff'],
    },
  }];

  const chartLayout = {
    autosize: false,
    showlegend: false,
    margin: {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
    },
    width:134,
    height:134
  };

  return (
    <div className='relative w-[30rem] h-[16rem] flex flex-col  bg-white rounded-[30px]'>
      
      <div className='flex flex-row justify-between   px-[40px] pt-[30px]'>
        <div className='font-bold text-[1.125em]'>Top Products</div>
        <div  className='text-[#858585] text-[0.75em]'>
            
            <select  value='2023-07-01'>
            <option value="2023-07-01">July 1, 2023</option>
            <option value="2023-07-02">July 2, 2023</option>
            <option value="2023-07-03">July 3, 2023</option>
            </select>
          </div>
        </div>


      <div className='flex flex-row justify-around mt-[1rem]'>
        <Plot 
        className='h-[100%]'
          data={chartData}
          layout={chartLayout}
          config={{ responsive: true }}
        />
          <div className="flex flex-col gap-3 h-[100%] mr-[3rem]"> 
              <div className='flex flex-row justify-center gap-2'>
                <div className='bg-red-400 h-[0.62rem] w-[0.62rem] mt-[0.5rem] rounded-[100%]'/>
                  <div>
                    <div className='font-bold text-[0.875em]'>Trouser</div>
                    <div className='text-[0.75em]'>123%</div>
                  </div>
              </div>
              
              <div className='flex flex-row justify-left gap-2'>
                <div className='bg-green-400 h-[0.62rem] w-[0.62rem] mt-[0.5rem] rounded-[100%]'/>
                  <div>
                    <div className='font-bold text-[0.875em]'>T-Shirt</div>
                    <div className='text-[0.75em]'>13%</div>
                  </div>
              </div>
              <div className='flex flex-row justify-center gap-2'>
                <div className=' bg-slate-500 h-[0.62rem] w-[0.62rem] mt-[0.5rem] rounded-[100%]'/>
                  <div>
                    <div className='font-bold text-[0.875em]'>Trouser</div>
                    <div className='text-[0.75em]'>123%</div>
                  </div>
              </div>
          </div>

       
      </div>
      </div>
 
  );
};

export default TopProducts;
