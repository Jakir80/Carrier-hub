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
                {
                    datas.map(data => <Apply key={data.id} data={data}></Apply>)
                }
            </div>
        </div>
    );
};
export default Static;