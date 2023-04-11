import React, { useState } from 'react';
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
const [application,setApplication]=useState(datas)
 const findingRemotejob=()=>{ 
        const collectremotejob=datas.filter(remote=>remote.remote_or_onsite=='Remote')
        setApplication(collectremotejob)  
}
const findFulltimeJob=()=>{
const collectFulltimejob=datas.filter(job=>job.remote_or_onsite=="Onsite")
setApplication(collectFulltimejob)
}
    return (
        <div>          
           <div className='md:pl-32 md:pr-32 md:mt-20 '>
           <div className='text-end mb-5'>
            <h1 className='text-2xl font-bold mb-2'>Filter By</h1>
            <div className='flex gap-5 place-content-end'>
                 <button onClick={()=>findingRemotejob()} className='border-2 p-4 rounded-md bg-gray-200'> Remote</button>
                <button onClick={()=>findFulltimeJob()} className='border-2 p-4  rounded-md bg-gray-200'>Onsite</button>           
            </div>
        </div>
                {
                    application.map(data => <Apply key={data.id} data={data}></Apply>)
                }
            </div>
        </div>
    );
};
export default Static;