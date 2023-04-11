import React from 'react';

const Category = ({singleCategory}) => {
    const {category,description,img}=singleCategory;
    return (
        <div className='bg-gray-200 md:mr-32 md:ml-32 md:px-5'>
        <div className='w-14 h-14 rounded-md md:pt-5'> <img src={img} alt="" /></div>
        <div className='md:mt-10 p-5'>
            <h2>{category}</h2>
            <h3>{description}</h3>
        </div>

        </div>
    );
};

export default Category;