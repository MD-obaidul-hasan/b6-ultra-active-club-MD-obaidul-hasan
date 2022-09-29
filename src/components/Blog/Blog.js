import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='b1'>
            <h3>How Does React Work</h3>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>

            <div className='b2'>
            <h3>Different Between Poops and State</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>

            <div className='b3'>
                <h3>How can I use data in useEffect?</h3>
            <p>To make this useEffect useful, we'll need to: update our useEffect to pass a prop called id to the URL, use a dependency array, so that we only run this useEffect when id changes, and then. use the useState hook to store our data so we can display it later.</p></div>
        </div>
    );
};

export default Blog;