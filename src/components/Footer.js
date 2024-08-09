import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='relative bottom-0 w-screen bg-gray-800 text-white text-center py-4'>
      <div className='flex justify-center items-center space-x-4 mb-2'>
        {/* Social Media Icons */}
        <a href="https://github.com/guddu2005" target="_blank" rel="noopener noreferrer">
          <FaGithub className='text-2xl hover:text-gray-400 transition-colors' title="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/guddu-kumar-664850287/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-2xl hover:text-gray-400 transition-colors' title="LinkedIn" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='text-2xl hover:text-gray-400 transition-colors' title="Twitter" />
        </a>
      </div>
      <p className='text-sm mb-1'>
        &copy; 2024 Guddu Kumar
      </p>
      <p className='text-xs'>
        Crafted with ❤️ and Thanks For Visiting
      </p>
    </div>
  );
}
