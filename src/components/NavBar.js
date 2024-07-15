import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <div>
      <div className="bg-blue-300 flex justify-between text-xl p-3 h-14 items-center">
        <div className='mx-5 text-2xl'>
          <Link to="/" className="text-white font-bold">Habit Tracker</Link>
        </div>
       
        <div className="flex space-x-4">
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Add Habit</Link>
          <Link to="/Weekly" className="text-white">Weekly</Link>
        </div>
          <div>
          <FontAwesomeIcon icon={faBell} className="text-white mr-10 text-xl cursor-pointer hover:text-black" />
          <Link to="/Login" className="text-white">
          <FontAwesomeIcon icon={faUser} className="text-white mr-5 text-2xl cursor-pointer hover:text-black" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
