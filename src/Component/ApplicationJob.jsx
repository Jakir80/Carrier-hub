import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Category from './Category';
const ApplicationJob = () => {
    const card = useLoaderData()
    const [categories, setcategories] = useState([])
    fetch('/category.json')
        .then(res => res.json())
        .then(data => setcategories(data))
    const [seeAll, setSeeAll] = useState(card.slice(0, 4))
    const handleSeeall = () => {
        setSeeAll(card)
    }
    return (
        <div>
            <div>
                <div className=' bg-gray-200'>
                    <div className=' md:flex md:gap-40 md:pt-40 md:ml-32 md:mr-32  '>
                        <div className='md:pt-10'>
                            <h1 className='text-5xl font-bold text-black'>One Step <br /> Closer To Your  <br /> </h1><br />
                            <span className='text-5xl font-bold text-blue-400 mt-10'> Dream Job</span>
                            <h4 className='mt-5 text-black'>Explore thousands of job opportunities with all the <br />
                                information you need. <br />
                                Its your future. Come find it. <br />
                                Manage all your job application from start to finish.</h4>
                            <button className='btn  rounded-md bg-blue-600 mt-10 text-white p-4 font-bold text-2xl'>Get Started</button>
                        </div>
                        <div className=' bg-gray-200 md:-mt-36 md:pl-20'>
                            <img src="https://i.ibb.co/d5ZCcFw/P3-OLGJ1-copy-1.png" alt="P3-OLGJ1-copy-1" border="0"></img>
                        </div>
                    </div>
                </div>
                <div className='text-center md:mt-40'>
                    <h1 className='text-4xl font-bold text-black'>Job Category List</h1>
                    <p className='font-bold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className=' mr-5 ml-5 md:grid  md:mt-40 grid-cols-4 sm:mb-5 gap-10 md:mr-32 md:ml-32'>
                    {
                        categories.map(singleCategory => <Category key={singleCategory.id} singleCategory={singleCategory}></Category>)
                    }
                </div>
                <div className=" mr-5 ml-5 md:grid md:grid-cols-2 justify-between m-auto sm:grid sm:grid-cols-1 md:ml-32 md:mr-32 gap-5 mb-10">
                    {
                        seeAll.map(singlecard => <Card key={singlecard.id} singlecard={singlecard}></Card>)
                    }
                </div>
                <div className='text-center'>
                    <div> {seeAll.length === 4 && <button onClick={handleSeeall} className='bg-blue-700 p-4 align-middle md:ml-32 md:mr-32 text-white text-2xl font-bold rounded-md mb-5  '>See All Jobs</button>} </div>
                </div>

            </div>
        </div>
    );
};

export default ApplicationJob;
