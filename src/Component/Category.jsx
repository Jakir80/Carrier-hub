import React from 'react';
const Category = ({ singleCategory }) => {
    const { category, description, img } = singleCategory;
    return (
        <div className='bg-gray-100  p-6 rounded-md mb-4'>
            <div className='w-14 h-14 rounded-md  p-2 bg-white'> <img src={img} alt="" /></div>
            <div className='md:mt-4'>
                <h2 className='font-bold'>{category}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    );
};

export default Category;