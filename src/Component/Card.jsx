import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ singlecard }) => {
    const { id, company_logo, job_title, company_name, location, fulltime, salary, parttime } = singlecard
    return (
        <div>
            <div className='md:ml-32 md:mr-32 md:mt-40 border-2 border-gray-300 md:p-5 rounded-md  md:w-auto md:py-10 md:h-auto gap-10'>
                <div className='w-40 mb-5'><img src={company_logo} alt="" /></div>
                <h1 className='font-bold text-2xl text-black'>{job_title}</h1>
                <h1 className='font-semibold mt-2 mb-2 text-xl'>{company_name}</h1>
                <div className='flex gap-5'>
                    <button className='border-2 border-blue-600 p-2 rounded-md text-blue-700 font-bold'> {fulltime}</button>
                    <button className='border-2 text-blue-700 font-bold border-blue-600 p-2 rounded-md'> {parttime}</button>
                </div>
                <div className='flex gap-5 mt-5 justify-start'>
                    <MapPinIcon className="h-6 w-6 text-blue-500" />
                    <h2>{location}</h2>
                    <div className=' flex gap-2'>
                        <CurrencyDollarIcon className='h-6 w-6 text-blue-500' />
                        <span>{salary}</span>
                    </div>
                </div>
                <Link to={`/job/${id}`}>
                    <button className='btn bg-blue-600 rounded-md text-white  text-2xl p-2 mt-4'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Card;