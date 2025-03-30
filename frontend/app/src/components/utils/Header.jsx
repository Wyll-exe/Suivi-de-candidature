import React from 'react';
import '../../style.css';
import { Link } from 'react-router';

const Header = () => {
  return (
    <>
      <div className='h-[5rem] flex justify-center items-center w-screen bg-gradient-to-r from-slate-900 to-slate-700 overflow-x-hidden'>
        <div className='w-[800px] flex justify-evenly items-center pt-[5px]'>
            <Link className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to="/">Home</Link>
            <Link className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to="/CreationCandidature">Création candidature</Link>
            <Link className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to="/Relance">Suivi relance</Link>
        </div>
      </div>
    </>
  );
};

export default Header;