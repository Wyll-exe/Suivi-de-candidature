import '../style.css';
import { Link, useParams } from "react-router";
import { useEffect, useState } from 'react'
import axios from 'axios';

function AffichageCandidature() {  

        const [test, setTest] = useState(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        const [updated, setUpdated] = useState(false)
    
        async function fetchTest() {
    
            
    
            setLoading(true)
            try {
                const url = "http://localhost:3000/api/v1"
    
    
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("pas d'API trouvé")
                }
    
    
                const data = await response.json()
                setTest(data)
            } catch (error) {
                setError(error)
                return
            } finally {
                setLoading(false)
            }
        }


        useEffect(() => {
            fetchTest()

        }, [])
    
    
        return (
            <div className='h-[100vh] w-screen'>
                <div className='flex h-[100vh] w-screen'>
                    <div className="bg-black w-sm h-[100vh] flex flex-col items-center fixed">
                        <h1 className='text-white text-[2.5rem] p-[2rem]'>Mon Espace</h1>
                        <div className='flex flex-col gap-[4rem] pt-[4rem] w-[100%] h-auto'>
                            <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                                <Link className='text-white text-[1.5rem]' to="/CreationCandidature">Ajouter une Candidature</Link>
                            </div>
                            <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                                <Link className='text-white text-[1.5rem]' to="/index">Suivi des relances</Link>
                            </div>
                            <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                                <h2 className='text-white text-[1.5rem]'>Statistiques</h2>
                            </div>
                        </div>
                        <Link className='text-white text-[1.5rem] bottom-[0] absolute' to="/">Retour au Home</Link>
                    </div>
                    <div className='pl-[26rem] pt-[2rem] pr-[2rem] w-screen overflow-x-hidden bg-cyan-50 flex flex-col items-center'>
                        <div className='flex flex-col gap-[4rem] w-[100%] max-w-[1300px]'>
                        {loading && <p>Loading...</p>}
                        {error && <p>{error.message}</p>}
                        {test?.map(post => (
                            <>
                            <div className='flex justify-evenly h-[10rem] pt-[2rem] pb-[2rem] border-2 border-solid border-black bg-cyan-200 rounded-[20px] w-[100%] max-w-[1400px] drop-shadow-2xl'>
                                <div className='flex flex-col justify-center items-center gap-[1.5rem] border-2 border-solid border-black rounded-[20px] px-[1.5rem] py-[2rem] bg-violet-300'>
                                    <p>Society</p>
                                    <p>{post.society}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-[1.5rem] border-2 border-solid border-black rounded-[20px] px-[1.5rem] py-[2rem] bg-violet-300'>
                                    <p>Job</p>
                                    <p>{post.job}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-[1.5rem] border-2 border-solid border-black rounded-[20px] px-[1.5rem] py-[2rem] bg-violet-300'>
                                    <p>Lien du post</p>
                                    <p>{post.job_link}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-[1.5rem] border-2 border-solid border-black rounded-[20px] px-[1.5rem] py-[2rem] bg-violet-300'>
                                    <p>Date</p>
                                    <p>{new Date(post.send_date).toDateString()}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-[1.5rem] border-2 border-solid border-black rounded-[20px] px-[1.5rem] py-[2rem] bg-violet-300'>
                                    <p>Status</p>
                                    <p>{post.status}</p>
                                </div>
                                <div className='flex flex-col justify-center gap-[1rem]'>
                                    <Link to={`/${post._id}`} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Modifier</Link>
                                    <Link to={`/1/${post._id}`} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Supprimer</Link>
                                </div>
                            </div>
                            
                            </> )) }
                        </div>
                    </div>
                </div>
            </div>
        )  
        }

export default AffichageCandidature
