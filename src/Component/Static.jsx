import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../utils/fakeDb';
import Apply from './Apply';

const Static = () => {
  const storageData=getStoredCart()
  const cards=useLoaderData()
//   console.log(cards)

// console.log(foundjob)
let datas=[]
for(const id in storageData){
    const foundjob=cards.find(card=>card.id==id)
    // console.log(foundjob)
    datas.push(foundjob)

}
// console.log(datas)


    return (
        <div>
           <div className='md:pl-32 md:pr-32 md:mt-20 '>
            
            {
                datas.map(data=><Apply key={data} data={data}></Apply>)
            }
           </div>
        </div>
    );
};

export default Static;