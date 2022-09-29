import React from 'react';
import './Chart.css'

const Chart = ({chart}) => {
    return (
    <div className='chart'>
            <h3>Md.Obaidul Hasan</h3>
            <div className='charts'>
                <p href="">weight:66kg</p>
                <p href="">height:5.6</p>
                <p href="">age:28</p>
            </div>
            <div>
               <h3>Exersise Details</h3>
               <p>Exersise Time: {chart} </p>
               <p>Break Time:</p>
            </div>    
        <div>   
            <h2>Add a break</h2>
    
            <p>Break time</p>
                <div className='btnitems'>
                  <button  ><p>15</p></button>
                  <button  ><p>25</p></button>
                  <button  ><p>30</p></button>
                  <button  ><p>20</p></button>
                </div> 
            <button className='acbtn'>Activity Compleate</button>    
        </div>
        <div>
        
        </div>
        
        
        
    
    </div>
     
    );
};

export default Chart;