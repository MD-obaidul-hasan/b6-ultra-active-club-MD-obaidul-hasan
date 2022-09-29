import React, { useEffect, useState } from 'react';
import './Chart.css'

const Chart = ({chart}) => {
    const [breakTime, setBreakTime] = useState(0);
    const breakList =[
        {id:1, time:'10s'},
        {id:2, time:'15s'},
        {id:3, time:'20s'},
        {id:4, time:'25s'},
        
    ]
    
    useEffect(() =>{
        const getData= localStorage.getItem('time')
        if ( getData){
            setBreakTime(JSON.parse(getData))
          
        }
    },[])
    const handleBreakTime = (time) => {
        console.log(time);
    localStorage.setItem('time',JSON.stringify(time))
        setBreakTime(time);
    }
    return (
    <div className='chart'>
            <h3>Md.Obaidul Hasan</h3>
            <div className='charts'>
                <p href="">W:66kg</p>
                <p href=""> H:5.6</p>
                <p href="">AGE:28</p>
            </div>
            <div>
               <h3>Exersise Details</h3>
               <p>Exersise Time: {chart} </p>
               <p>Break Time: {breakTime}</p>
            </div>    
        <div>   
            <h2>Add a break</h2>
    
            <p>Break time</p>
                <div className='btnitems'>
                  
                  {
                    breakList.map(item=> <button
                         key= {item.id} 
                         onClick={() => handleBreakTime(item.time)}>{item.time}</button>)
                  }
                </div> 
            <button className='acbtn'>Activity Compleate</button>    
        </div>
        <div>
        
        </div>
        
        
        
    
    </div>
     
    );
};

export default Chart;