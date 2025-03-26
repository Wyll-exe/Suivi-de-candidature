import '../style.css';
import { Link } from "react-router";

function CreationCandidature() {  

return (
    <div className='flex h-[100vh] w-screen'>
        <div className="bg-black w-sm h-[100vh] flex flex-col items-center fixed">
            <h1 className='text-white text-[2.5rem] p-[2rem] whitespace-nowrap'>Mes Candidatures</h1>
            <div className='flex flex-col gap-[4rem] pt-[4rem] w-[100%] h-auto'>
                <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                    <h2 className='text-white text-[1.5rem]'>Ajouter une Candidature</h2>
                </div>
                <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                    <h2 className='text-white text-[1.5rem]'>Suivi des relances</h2>
                </div>
                <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                    <h2 className='text-white text-[1.5rem]'>Statistiques</h2>
                </div>
            </div>
            <Link className='text-white text-[1.5rem] bottom-[0] absolute' to="/">Retour au Home</Link>
        </div>
        <div className='pl-[26rem] pt-[10rem] pr-[2rem] w-screen overflow-x-hidden'>
            <div className='border-2 border-solid border-black h-[100vh]'>

            </div>
        </div>
    </div>
    
)  
}

export default CreationCandidature
