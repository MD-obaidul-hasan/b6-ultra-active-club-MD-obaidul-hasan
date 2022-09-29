import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Chart from './Chart/Chart';
import './Equip.css'
const Equip = () => {
    const [items, setItems] = useState([]);
    const [chart, setChart] = useState([]);

    useEffect( () =>{
       fetch('items.json') 
       .then(res=> res.json())
       .then(data => setItems(data))
    },[]);

    const handleAddChart = (iteam) => {
        console.log(iteam);
        const newChart = [...chart, iteam];
        setChart(newChart);
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

            </div>
        </div>
    );
};

export default Equip;