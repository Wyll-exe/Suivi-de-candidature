import React from 'react'

const Relance = () => {
  return (
    <>
{/* Main */}
            <div className='w-300 h-3/4 bg-gray-900 flex flex-col justify-between'>

            {/* Barre d'options , recherche */}
                <div className='w-full h-30 gap-6 bg-gray-800 flex mb-4'>
                    <input 
                    type="text" 
                    placeholder="Rechercher un poste / entreprise ..." 
                    className="w-full pr-4 bg-amber-50 border-5 border-b-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

{/* Jours de relance */}
                    <div className='w-35 border-4 flex items-center border-amber-50/0'>
                        <select className="p-2 border-5 h-full bg-amber-50 border-b-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            {Array.from({ length: 30 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))};
                        </select>
                        <p className='ml-4 text-amber-50'> Jours </p>
                    </div>
                    <div className=''>
                        <button className='submit h-full'> SUBMIT </button>
                    </div>
                </div>


{/* Offres */}
                <div className='w-3/4 h-3/4 ml-35 mb-10 flex justify-center items-center rounded-3xl bg-lime-300'>

                    <div className='mt-1 space-y-6'>

                        <div className='flex items-center gap-10'>
                            <p>Offres 1 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>

                        <div className='flex items-center gap-10'>
                            <p>Offres 2 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 3 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 4 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 5 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 6 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 7 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 8 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 9 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p>Offres 10 - Entreprise / Poste / Non-relancé depuis : 5 J</p>
                            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
                            <button className='submit-2'> SEND </button>
                        </div>

                    </div> 
                </div>

            </div>
    </>

  )
}

export default Relance;


