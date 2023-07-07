import React from 'react'

const Card = ({card}) => {
  var color="";
  const id=card.id;

  if(id===1){
    color='#DDEFE0';
  }
  else if(id===2){
    color='#F4ECDD';
  }
  else if(id===3){
    color='#EFDADA';
  }
  else{
    color='#DEE0EF';
  }
  var price= '';
  price=card.id===1 ? (`$${card.price}`):(card.price);
  
  return (
    <div className={`w-[221.05px] h-[120px] rounded-[20px] `}
    style={{backgroundColor: color}}>
      <img className='ml-[169px] mt-[20px]' src={card.icon}></img>
      <div className='ml-[25px] md-[20px]'>
        <p className='font-[400]'>{card.title}</p>
        <p className='font-bold text-[24px]'> {price}  </p>
      </div> 
      
    </div>
  )
}

export default Card
