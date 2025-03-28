import '../../style.css';
import React from 'react';

function Footer({ enAttente, acceptees, refusees, total }) {
  return (
    <div className='mt-auto z-1'>
      <div className='bg-black flex justify-between h-15 items-center rounded-xs'>
        <div className='text-blue-50 justify-items-center ml-3'>
          {acceptees} <p className='text-green-600'>Acceptées</p>
        </div>
        <div className='text-blue-50 justify-items-center'>
          {enAttente} <p className='text-orange-300'>En attente</p>
        </div>
        <div className='text-blue-50 justify-items-center'>
          {refusees} <p className='text-red-600'>Refusées</p>
        </div>
        <div className='text-blue-50 justify-items-center mr-3'>
          {total} : <strong className='text-amber-50'>AU TOTAL</strong>
        </div>
      </div>
    </div>
  );
}

export default Footer;