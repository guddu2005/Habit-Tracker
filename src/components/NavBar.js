import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <div className='w-full'>
      <div className="bg-blue-300 flex justify-around md:text-xl text-sm p-3 md:h-14 md:w-full w-96  items-center">
        <div className='md:mx-5   md:text-2xl w-1/4'>
          <Link to="/" className="text-white font-bold">Habit Tracker</Link>
        </div>
        <div className="flex  justify-between w-2/4">
          <Link to="/" className="text-white mx-3">Add Habit</Link>
          <Link to="/Weekly" className="text-white">Weekly</Link>
        </div>
        <div className='flex md:w-1/12 ml-6  '>
          <FontAwesomeIcon icon={faBell} className="text-white md:mr-10 mr-4 text-xl mt-1 cursor-pointer hover:text-black" />
          <Link to="/Login" className="text-white">
            <FontAwesomeIcon icon={faUser} className="text-white md:mr-5 text-2xl cursor-pointer hover:text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
