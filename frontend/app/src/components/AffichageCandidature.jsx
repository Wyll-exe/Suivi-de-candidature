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
                    <Link className='text-white text-[1.5rem]' to="/test">Suivi des relances</Link>
                </div>
                <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                    <h2 className='text-white text-[1.5rem]'>Statistiques</h2>
                </div>
            </div>
            <Link className='text-white text-[1.5rem] bottom-[0] absolute'>Retour au menu</Link>
        </div>
        <div className='pl-[26rem] pt-[2rem] pr-[2rem] w-screen overflow-x-hidden'>
            <div className='flex flex-col gap-[4rem]'>
                <div className='border-2 border-solid border-black h-[10rem] flex flex-col'>
                    <div className='border-2 border-solid border-red-500 h-[40%] flex justify-between items-center px-[2rem]'>
                        <p>Entreprise</p>
                        <p>Poste</p>
                        <p>Lien de l’offre</p>
                        <p>Date d’envoi</p>
                        <p>Statut</p>
                    </div>
                    <div></div>
                </div>
                <div className='border-2 border-solid border-black h-[15rem]'>

                </div>
                <div className='border-2 border-solid border-black h-[15rem]'>

                </div>
                <div className='border-2 border-solid border-black h-[15rem]'>

                </div>  
            </div>
        </div>
    </div>
)  
}

export default AffichageCandidature
