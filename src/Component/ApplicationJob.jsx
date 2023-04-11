import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Category from './Category';
// import { Icon } from '@iconify/react';
const ApplicationJob = () => {
    const [card,setCard]=useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setCard(data))        
    }
   
    ,[])
    const categories=useLoaderData()
    // console.log(categories)
    return (
       <div>
         <div className=' bg-gray-200'>
            <div className='md:flex md:gap-40 md:pt-40 md:ml-32 md:mr-32 '>
                <div className='md:pt-10'>
                    <h1 className='text-5xl font-bold text-black'>One Step <br /> Closer To Your  <br /> </h1><br />
                    <span className='text-5xl font-bold text-blue-400 mt-10'> Dream Job</span>
                    <h4 className='mt-5 text-black'>Explore thousands of job opportunities with all the <br />
                        information you need. <br />
                        Its your future. Come find it. <br />
                        Manage all your job application from start to finish.</h4>
                    <button className='btn  rounded-md bg-blue-600 mt-10 text-white p-4 font-bold text-2xl'>Apply Now</button>
                </div>
            <div className=' bg-gray-200 md:-mt-36 md:pl-20'>
            <img src="image-1.png" alt="" />
            </div>

            </div>
          
        </div>
       <div className='text-center md:mt-40'>
        <h1 className='text-4xl font-bold text-black'>Job Category List</h1>
        <p className='font-bold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
       </div>
       <div className='grid md:grid-cols-4 gap-2 md:mt-40'>
        {
          categories.map(singleCategory=><Category key={singleCategory.id} singleCategory={singleCategory}></Category>)  
        }
       </div>
       <div className="md:grid md:grid-cols-2 justify-between m-auto sm:grid sm:grid-cols-1  gap-5">
        {
            card.map(singlecard=><Card key={singlecard.id} singlecard={singlecard}></Card>)
        }
       </div>
       </div>
    );
};

export default ApplicationJob;