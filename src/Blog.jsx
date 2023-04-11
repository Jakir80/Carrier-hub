import React from 'react';

const Blog = () => {
    return (
        <div className='md:pl-32 md:pr-32 mt-10'>
            
            <div className='bg-gray-100 p-4 rounded-md mb-10'>
                <h1 className='text-2xl font-bold mb-4 '>Question-1:   When should we use context api .?</h1>
                <h1 className='font-semibold mb-2'>Answer:  The Context API in React should be used when you have data that needs to be passed down through the component tree, <br /> but you don't want to pass it down explicitly through props at each level. <br /> Instead, you can create a Context object that contains the data and pass it down once, <br /> where it can be accessed by any child component that needs it </h1>
            </div>
            <div className='bg-gray-100 p-4 rounded-md mb-10'>
                <h1 className='text-2xl font-bold mb-4 '> Question-2: What is custom hook ? </h1>
                <h1 className='font-semibold mb-2'>Answer:   A custom hook is a function in React that allows you to reuse stateful logic across multiple components. <br /> Custom hooks are a powerful feature of React that enable    developers to extract common logic from components and reuse it without duplicating code.</h1>
            </div>
            <div className='bg-gray-100 p-4 rounded-md mb-10'>
                <h1 className='text-2xl font-bold mb-4 '>Question-3: What is useRef and what can be do with useRef ??</h1>
                <h1 className='font-semibold mb-2' >Answer:   In React, useRef is a hook that provides a way to access and manipulate the DOM or other values across renders. It returns a mutable ref object that can be used to store a value that persists across renders without triggering a re-render of the component. </h1>
            </div>
            <div className='bg-gray-100 p-4 rounded-md mb-10'>
                <h1 className='text-2xl font-bold mb-4 '>Question-4: What is useMemo ?</h1>
                <h1 className='font-semibold mb-2'>Answer:  useMemo is a hook in React that memoizes the result of a function so that it only re-computes the value when its dependencies change. It is used to optimize performance by avoiding unnecessary computations and re-renders.</h1>
            </div>
        </div>
    );
};

export default Blog;