import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  fetch('Category')
  return (
    <div>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 bg-gray-200'>
        <div className='relative flex items-center justify-between gap-10 md:mr-32 md:ml-32' >
          <h1 className='text-4xl font-bold'>Future is here</h1>
          <ul className='items-center hidden  lg:flex gap-10'>
            <li>
              <NavLink
                to='/rechart'
                aria-label='Rechart'
                title='Rechart'
                className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/static'
                aria-label='Home'
                title='Apply Jobs'
                className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
              >
                Applied Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/'
                aria-label='home'
                title='Home'
                className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blog'
                aria-label='blog'
                title='blog'
                className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          <button className='btn bg-blue-700 p-4 text-white font-bold text-2xl rounded-md'>Start Applying</button>
          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute z-10 top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <NavLink
                          to='/'
                          aria-label='home'
                          title='Home'
                          className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <Link
                          to='/rechart'
                          aria-label='Rechart'
                          title='Rechart'
                          className=' tracking-wide font-bold transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Statistics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/static'
                          aria-label='Apply jobs'
                          title='Apply Jobs'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Apply jobs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blog'
                          aria-label='Blog'
                          title='Blog'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Blogs
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
