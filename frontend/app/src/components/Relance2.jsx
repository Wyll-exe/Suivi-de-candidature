{/* Main */}
<div className='pl-[24rem] w-screen flex justify-center items-start flex-col'>

<div className='w-3/4 h-3/4 bg-indigo-950 flex flex-col justify-between'>

{/* Barre d'options , recherche */}

    <div className='w-full h-30 bg-cyan-200 flex justify-between mb-4'>
        <input 
         type="text" 
        placeholder="Rechercher une offre ..." 
        className="w-3/4 ml-10 pr-4 border-5 border-b-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

{/* Jours de relance */}
        <div className='w-35 border-4 flex items-center'>
            <select className="p-2 border-5 h-full border-b-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                {Array.from({ length: 30 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
                {i + 1}
            </option>
            ))}
            </select>
            <p className='ml-8'> J </p>
        </div>
    </div>

{/* Offres */}
        <div className='w-3/4 h-3/4 ml-35 mb-10 flex justify-center items-center bg-lime-300'>

             Offres

        </div> 

</div>
</div>