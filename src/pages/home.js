import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const excuses = [
        "Ek baar sochlo...",
        "Ek baar fir se Sochlo..",
        "Are ese thodi mana karte hai...",
        "Arey tumhare fav cafe chalenge!!",
        "Acha chalo Coffee chalein?",
        "Not coffee?? How's Tea?",
        "Pasta??",
        "Jahan tum bolo wahan chalenge",
        "Pakka NO wala NO??",
        "Chalo fir tumhari marzi..",
        "Are badi besharam ho kitni baar No karoge!!"
    ]
    const [index,setIndex] = useState(-1);
    const navigate = useNavigate();
    function handleNo(){
        if(index>=excuses.length){
            navigate("/besharam");
        }
        else{
            setIndex((prev)=>prev+1);
        }
        
       
    }
  return (
    <div className="App">
    <div>
      <img src='/first.gif' height="350px" width="400px"></img>
      <h2 className='h2-font'>Will you go on a date with me??</h2>
    </div>
    <div className='bottom-button'>
      <a href='/yeyeye'><h2 className='button-yes'>Yes</h2></a>
      <h2 className='button-yes' onClick={()=>handleNo()}>No</h2>
    </div>
   {index >=0 && <div>
        <p style={{fontSize:"20px"}}>"{excuses[index]}"</p>
    </div>}
  </div>
  )
}

export default Home;