import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'


const Yeyeye = () => {
    const [width,setWidth] = useState(0);
    const [height,setHeight] = useState(0);
    useEffect(()=>{
     setWidth(window.screen.width);
     setHeight(window.screen.height)
    },[])
    console.log(height)
  return (
    <>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
    </head>
     <Confetti
      width={width}
      height={height}
    />
   
    <div className='detail-page'>
        
       <img src='/bear-heart.gif' width="300px" height="300px"></img>
       <h2 className='h2-font-detail'>Thanks, See you BYEEEE !!</h2>
    </div>
    </>
  )
}

export default Yeyeye;