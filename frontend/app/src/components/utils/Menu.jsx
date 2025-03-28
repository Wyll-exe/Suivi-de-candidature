import React from 'react';
import '../../style.css';
import { Link } from 'react-router';

const Menu = () => {
  return (
    <>
      <div className='text-yellow-50 text-lg flex flex-row gap-4 z-100'>

        <Link to="/index" className='submit-3 bg-white px-4 py-2 rounded'> HOME </Link>

        <Link to="/creationCandidature" className='submit-3 bg-white px-4 py-2 rounded'> Création </Link>

        <Link to="/affichageCandidature" className='submit-3 bg-white px-4 py-2 rounded'> Relance </Link>

      </div>
    </>
  );
};

export default Menu;