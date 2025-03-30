import '../style.css';
import { Link, useNavigate } from "react-router";
import React, { useState } from 'react';
import axios from 'axios';
import Header from './utils/Header';

function CreationCandidature() {
    let navigate = useNavigate();
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
        if (!candidature.follow) formError.follow = 'Nombre de jour requi';

        if (Object.keys(formError).length > 0) {
            setError(formError);
            return;
        }

        const user = {
            society: candidature.society,
            job: candidature.job,
            job_link: candidature.job_link,
            send_date: new Date(candidature.send_date).getTime(),
            status: candidature.status,
            follow: candidature.follow
        };



        try {
            const {data, status} = await axios.post('http://localhost:3000/api/v1', user);
            alert("Votre candidature à été envoyé avec succès !");
            if(status === 201) navigate("/")
        } catch (error) {
            console.error("Erreur", error);
        }
    };

    return (
        <div className='flex h-[100vh] overflow-x-hidden w-screen flex flex-col'>
            <div>
                <Header />
            </div>
            <div className=' w-screen bg-gradient-to-r from-indigo-400 to-cyan-400 h-[100vh] '>
                <div className='flex justify-center pt-[2rem] pr-[2rem] pb-[2rem] w-[100%] h-[100%]'>
                    <div className='border-2 bg-gradient-to-r from-blue-200 to-cyan-200 border-solid rounded-[20px] border-black w-[30rem]'>
                        <div className='h-[100%]'>
                            <form className='h-[100%] flex flex-col items-center justify-evenly' onSubmit={handleSubmit}>
                                <p class="bg-purple-100 text-purple-800 text-xl font-medium px-[2rem] py-[1rem] rounded-[20px] dark:bg-purple-900 dark:text-purple-300 mt-[2rem]">Création Candidature</p>
                                <div className='flex flex-col items-center justify-evenly h-[80%] w-[100%]'>
                                    <input 
                                        type="text" 
                                        placeholder='Nom de la société' 
                                        name='society' 
                                        value={candidature.society} 
                                        onChange={handleChange} 
                                        required 
                                        className='bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[20px] px-[1rem] py-[.2rem]'
                                    />
                                    <input 
                                        type="text" 
                                        placeholder='Poste' 
                                        name='job' 
                                        value={candidature.job} 
                                        onChange={handleChange} 
                                        required 
                                        className='bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[20px] px-[1rem] py-[.2rem]'
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Lien vers l'offre"
                                        name='job_link' 
                                        value={candidature.job_link} 
                                        onChange={handleChange} 
                                        required 
                                        className='bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[20px] px-[1rem] py-[.2rem]'
                                    />
                                    <input 
                                        type="date" 
                                        placeholder="Date d\'envoi"
                                        name='send_date' 
                                        value={candidature.send_date} 
                                        onChange={handleChange} 
                                        required 
                                        className='bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[20px] px-[1rem] py-[.2rem]'
                                    />
                                    <input
                                        type="number" 
                                        placeholder='Nombre de jour depuis la candidature' 
                                        name='follow' 
                                        value={candidature.follow} 
                                        onChange={handleChange} 
                                        required 
                                        className='w-[75%] bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[20px] px-[1rem] py-[.2rem]'
                                    />
                                    <input
                                        type="text" 
                                        placeholder='En attente, Acceptée, Refusée' 
                                        name='status' 
                                        value={candidature.status} 
                                        onChange={handleChange} 
                                        required 
                                        className='w-[70%] bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[20px] px-[1rem] py-[.2rem]'
                                    />
                                    </div>
                                <button type='submit' class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreationCandidature;