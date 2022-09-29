import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Equip.css'
const Equip = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
       fetch('items.json') 
       .then(res=> res.json())
       .then(data => setItems(data))
    },[]);
    return (
        <div className='equip-container'>
            <div className="item-container">
                {
                    items.map(iteam=><Item 
                        key={iteam.id}
                        iteam={iteam}
                        ></Item>)
                }

            </div>
            <div className='chart-container'>
<h3>Md.Obaidul Hasan</h3>
            </div>
        </div>
    );
};

export default Equip;