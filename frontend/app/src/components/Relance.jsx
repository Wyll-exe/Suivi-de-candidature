import '../style.css'

function Relance() {
  return (
    
    <div className='flex h-[100vh] w-screen'>


    



    {/* Nombres candidatures : Footer */}
    <footer className='flex flex-col justify-end w-full -z-50'>
        <div>
            <div className='bg-black flex justify-between h-15 items-center' >

                <div className='text-blue-50 justify-items-center ml-3'> 5  <p className='text-green-600'> acceptées </p> </div>
                <div className='text-blue-50 justify-items-center'> 2  <p className='text-orange-300'> en attente </p> </div>
                <div className='text-blue-50  justify-items-center'> 300  <p className='text-red-600'> refusées </p> </div>
                <div className='text-blue-50 justify-items-center mr-3'> 307 :  <strong className='text-amber-50'> AU TOTAL </strong> </div>

            </div>
        </div>
    </footer>

  

    </div>
    


  );
}



export default Relance;