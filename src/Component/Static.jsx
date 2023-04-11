import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../utils/fakeDb';
import Apply from './Apply';
const Static = () => {
    const storageData = getStoredCart()
    const cards = useLoaderData()
    let datas = []
    for (const id in storageData) {
        const foundjob = cards.find(card => card.id == id)
        datas.push(foundjob)
    }
    return (
        <div>
            
           <div className='md:pl-32 md:pr-32 md:mt-20 '>
           <div className='text-end mb-5'>
            <h1>Filter By</h1>
            <div className='flex gap-5'>
                <button className='border-2 p-4 rounded-md border-gray-500 bg-gray-200'> Remote</button>
                <button className='border-2 p-4 border-gray-500 rounded-md bg-gray-200'>Full Time</button>
            
            </div>
        </div>
                {
                    datas.map(data => <Apply key={data.id} data={data}></Apply>)
                }
            </div>
        </div>
    );
};
export default Static;