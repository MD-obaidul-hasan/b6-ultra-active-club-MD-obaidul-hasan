import React from 'react';
import './Item.css';
const Item = (props) => {
   
    // const {handleAddChart, iteam} = props;
    const { picture, name, about, age, time } = props.iteam;
    
    return (
        <div className='itemproduct'>

            <img src={picture} alt=""></img>
            <div className='iteminfo'>
            <p className='itemname'>{name}</p>
            <p>{about}</p>
            <p>For Age: {age}</p>
            <p>Time Require:{time}</p>
            </div>
            <button onClick={() => props.handleAddChart(time)} className='btnitem'>
                <p>Add to List</p>
            </button>

        </div>
    );
};

export default Item;