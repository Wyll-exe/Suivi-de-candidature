import '../style.css';
import { Link } from "react-router";

function AffichageCandidature() {  

return (
    <div className='flex h-[100vh] w-screen'>
        <div className="bg-black w-sm h-[100vh] flex flex-col items-center fixed">
            <h1 className='text-white text-[2.5rem] p-[2rem]'>Mon Espace</h1>
            <div className='flex flex-col gap-[4rem] pt-[4rem] w-[100%] h-auto'>
                <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                    <Link className='text-white text-[1.5rem]' to="/CreationCandidature">Ajouter une Candidature</Link>
                </div>
                <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                    <h2 className='text-white text-[1.5rem]'>Suivi des relances</h2>
                </div>
                <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                    <h2 className='text-white text-[1.5rem]'>Statistiques</h2>
                </div>
            </div>
            <Link className='text-white text-[1.5rem] bottom-[0] absolute'>Retour au menu</Link>
        </div>
        <div className='pl-[24rem] w-screen'>
            <h2>vdsd</h2>
        </div>
    </div>
)  
}

export default AffichageCandidature
