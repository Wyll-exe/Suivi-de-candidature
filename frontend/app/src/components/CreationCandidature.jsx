import '../style.css';
import { Link } from "react-router";
import React, {useState} from 'react';

function CreationCandidature (){

        const [candidature, setCandidature] = useState ({
            society: '',
            job:'',
            job_link:'',
            send_date:'',
            status:''
        })

    const handleChange = (event) => {
        const {name, value} = event.target
        setCandidature(prevCandidature => ({...prevCandidature, [name]: value}));
    }

    const handleSubmit = () => {
        event.preventDefault()
        try {

        } catch (error) {
            console.log(error);
        }}

    return (
        <div className='flex h-[100vh] w-screen'>
        <div className="bg-black w-sm h-[100vh] flex flex-col items-center fixed">
            <h1 className='text-white text-[2.5rem] p-[2rem] whitespace-nowrap'>Mes Candidatures</h1>
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
            <Link className='text-white text-[1.5rem] bottom-[0] absolute' to="/">Retour au Home</Link>
        </div>
        <div className='pl-[26rem] w-screen overflow-x-hidden'>
            <div className='flex justify-center pt-[2rem] pr-[2rem] pb-[2rem] w-[100%] h-[100%]'>
                <div className='border-2 border-solid border-black h-[100%] w-[30rem]'>
                    <div>
                        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                            <input type="text" placeholder='vfsbgfdff' name='society' onChange={handleChange} required />
                             <input type="text" placeholder='vfbfdssf' name='job' onChange={handleChange} required />
                             <input type="text" placeholder='vfsbgsf' name='job_link' onChange={handleChange} required />
                             <input type="number"  placeholder='vfrersf' name='send_date' onChange={handleChange} required />
                             <input type="text" placeholder='vvnjuhgfsf' name='status' onChange={handleChange} required />
                             <button>Valider</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default CreationCandidature
