import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Chart from './Chart/Chart';
import './Equip.css'
const Equip = () => {
    const [items, setItems] = useState([]);
    const [chart, setChart] = useState(0);
     const [breakTime, setBreakTime] = useState(0);

    useEffect( () =>{
       fetch('items.json') 
       .then(res=> res.json())
       .then(data => setItems(data))
    },[]);

    const handleAddChart = (time) => {
        console.log(time);
    
        setChart(chart + parseInt(time));
    }
   
    return (
        <div className='equip-container'>
            <div className="item-container">
                {
                    items.map(iteam=><Item 
                        key={iteam.id}
                        iteam={iteam}
                        handleAddChart={handleAddChart}
                        ></Item>)
                }

            </div>
            <div className='chart-container'>
                <Chart chart={chart}></Chart>
                {/* <p> break Time: {breakTime}</p> */}
            </div>
        </div>
    );
};

export default Equip;