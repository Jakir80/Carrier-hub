import { CalendarDaysIcon, CurrencyDollarIcon, InboxArrowDownIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addtoDb } from '../utils/fakeDb';
const JobDetails = () => {
   const [details, setDetails] = useState([])
   const jobs = useLoaderData();
   const dynamik = useParams();
   let dynamikId = dynamik.jobId
   useEffect(() => {
      if (jobs) {
         const singleJob = jobs.find(job => job.id == dynamikId)
         setDetails(singleJob)
      }
   }, [])
   const store = (id) => {
      addtoDb(id)
   }
   return (
      <div>
         <div>
            <h1 className='text-center bg-gray-200 md:pt-40 md:pb-40 text-3xl font-bold text-black'>  <h1>Job Details </h1></h1>
         </div>
         <div className='md:flex gap-32'>
            <div className='md:mt-20 md:pb-10 md:pl-32 md:pr-32' >
               <h1 className='font-bold text-black text-2xl'>Job Description:</h1>
               <span>{details.job_description}</span>
               <h1 className='font-bold text-2xl mt-5 mb-5'>Job Responsibility:</h1>
               <span >{details.job_responsibility}</span>
               <h1 className='font-bold text-2xl mt-5 mb-5'>Educational Requirement: </h1>
               <span>{details.educational_requirements}</span>
               <h1 className='font-bold text-2xl mt-5 mb-5'>Experience</h1>
               <span>{details.experiences}</span>
            </div>
            <div className='mt-5 bg-gray-200 md:p-4 rounded-md'>
               <h1 className='text-center font-bold text-2xl mb-4 '>Job details</h1>
               <hr />
               <div className='flex justify-evenly gap-5 mt-4 items-center'>
                  <CurrencyDollarIcon className='h-6 w-6 text-blue-500' />
                  <span>Salary:</span>
                  <h1>{details.salary}</h1>
               </div>
               <div className='flex justify-center gap-5 mt-4 items-center'>
                  <CalendarDaysIcon className='h-6 w-6 text-blue-500' />
                  <span>Job title:</span>
                  <h1>{details.job_title}</h1>
               </div>
               <h1 className='font-bold text-center text-2xl mb-2 mt-2'>Contact information</h1>
               <hr />
               <div className='flex gap-5 mt-4 items-center '>
                  <PhoneIcon className='h-6 w-6 text-blue-500' />
                  <span>Phone:</span>
                  <h1>{details.phone}</h1>
               </div>
               <div className='flex gap-5 mt-4 items-center '>
                  <InboxArrowDownIcon className='h-6 w-6 text-blue-500' />
                  <span>Email:</span>
                  <h1>{details.email}</h1>
               </div>
               <div className='flex  gap-5 mt-4 items-center'>
                  <MapIcon className='h-6 w-6 text-blue-500' />
                  <span>Address:</span>
                  <h1>{details.location}</h1>
               </div>
               <Link to='/static'><button className='btn font-bold bg-blue-600 p-4 text-white mt-5 items-center w-full mb-0 rounded-md' onClick={() => store(details.id)}>Apply Now</button></Link>
            </div>
         </div>
      </div>
   );
};

export default JobDetails;