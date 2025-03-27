import '../style.css';
import { Link } from "react-router";
import React, { useState } from 'react';
import axios from 'axios';


function CreationCandidature() {

    const [candidature, setCandidature] = useState({
        society: '',
        job: '',
        job_link: '',
        send_date: '',
        status: ''
    });

    const [error, setError] = useState({}); 


    const handleChange = (event) => {
        const { name, value } = event.target;
        setCandidature(prevCandidature => ({ ...prevCandidature, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formError = {};
        if (!candidature.society) formError.society = 'Society est requi';
        if (!candidature.job) formError.job = 'Job est requi';
        if (!candidature.job_link) formError.job_link = 'Job link est requi';
        if (!candidature.send_date) formError.send_date = 'Send date est requi';
        if (!candidature.status) formError.status = 'Status est requi';

        if (Object.keys(formError).length > 0) {
            setError(formError);
            return;
        }

        const user = {
            society: candidature.society,
            job: candidature.job,
            job_link: candidature.job_link,
            send_date: new Date(candidature.send_date).getTime(),
            status: candidature.status
        };



        try {
            const response = await axios.post('http://localhost:3000/api/v1', user);
            console.log(response.data);
            alert("Votre candidature à été envoyé avec succès !");
        } catch (error) {
            console.error("Erreur", error);
        }
    };

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
                                <input 
                                    type="text" 
                                    placeholder='Nom de la société' 
                                    name='society' 
                                    value={candidature.society} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    placeholder='Poste' 
                                    name='job' 
                                    value={candidature.job} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    placeholder="Lien vers l\'offre"
                                    name='job_link' 
                                    value={candidature.job_link} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <input 
                                    type="date" 
                                    placeholder="Date d\'envoi"
                                    name='send_date' 
                                    value={candidature.send_date} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <input className='w-[50%]'
                                    type="select" 
                                    placeholder='En attente, Acceptée, Refusée' 
                                    name='status' 
                                    value={candidature.status} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <button type="submit">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreationCandidature;