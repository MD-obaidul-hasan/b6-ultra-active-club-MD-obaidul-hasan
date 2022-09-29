import React from 'react';
import './Chart.css'

const Chart = ({chart}) => {
    return (
        <div className='chart'>
            <h3>Md.Obaidul Hasan</h3>
            <a href="">weight</a>
            <a href="">height</a>
            <a href="">age</a>
<div>
        
    <h2>Add a break</h2>
    
    {/* <button onClick={() => props.handleAddChart(time)} className='btnitem'>
                <p>20</p>
            </button> */}
            <div>
            <p>Break time</p>
            <div className='btnitems'>
           
                <button  ><p>15</p>
                </button>
                <button  ><p>25</p>
                 </button>
                <button  ><p>30</p>
                </button>
                <button  ><p>20</p>
                </button>
           </div>
            </div>
           
    {/* <a href="">20</a><a href="">15</a><a href="">25</a><a href="">30</a> */}
    </div>

    <p>Exersise Time: {chart} </p>
        <p>Break Time:</p>
     </div>
    );
};

export default Chart;