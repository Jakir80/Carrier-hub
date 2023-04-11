import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
const Apply = ({ data }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, location, parttime, fulltime, salary } = data
    return (
        <div className='flex justify-between items-center border-gray-300 border-2 p-4 rounded-md mb-4'>
            <div className='flex gap-5 rounded-md  mb-4 p-4 items-center'>
                <div className='w-25 h-25 bg-gray-200 md:p-12'><img src={company_logo} alt="" /></div>
                <div>
                    <h1 className='font-bold text-2xl'>{job_title}</h1>
                    <h1 className='font-semibold'>{company_name}</h1>
                    <div className='flex gap-10'>
                        <button className='rounded-md text-blue-400 border-blue-400 p-2 border-2 mt-2'>{fulltime}</button>
                        <button className=' text-blue-400 rounded-md border-blue-400 p-2 border-2 mt-2'>{parttime}</button>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <MapPinIcon className='w-8 h-8' />
                        <h1>  {location}</h1>
                        <CurrencyDollarIcon className='w-8 h-8' />
                        <h1>{salary}</h1>
                    </div>
                </div>
            </div>
            <div><Link to='/job'><button className=' bg-blue-500 rounded-md p-6 text-white font-bold text-2xl'>view details</button></Link></div>
        </div>

    );
};

export default Apply;