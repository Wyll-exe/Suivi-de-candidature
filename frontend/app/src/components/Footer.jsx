import '../style.css'

function Relance() {
  return (
    <>
{/* Nombres candidatures : Footer */}
      <div className='z-1'>
          <div className='bg-black flex justify-between h-15 items-center rounded-xs' >

              <div className='text-blue-50 justify-items-center ml-3'> 5  <p className='text-green-600'> acceptées </p> </div>
              <div className='text-blue-50 justify-items-center'> 2  <p className='text-orange-300'> en attente </p> </div>
              <div className='text-blue-50  justify-items-center'> 300  <p className='text-red-600'> refusées </p> </div>
              <div className='text-blue-50 justify-items-center mr-3'> 307 :  <strong className='text-amber-50'> AU TOTAL </strong> </div>

          </div>
      </div>
    </>
    


  );
}



export default Relance;