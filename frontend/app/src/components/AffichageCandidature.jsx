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
                                <Link className='text-white text-[1.5rem]' to="/test">Suivi des relances</Link>
                            </div>
                            <div className='border-y-2 border-solid border-white w-[100%] h-[4rem] flex justify-center items-center'>
                                <h2 className='text-white text-[1.5rem]'>Statistiques</h2>
                            </div>
                        </div>
                        <Link className='text-white text-[1.5rem] bottom-[0] absolute' to="/">Retour au Home</Link>
                    </div>
                    <div className='pl-[26rem] pt-[2rem] pr-[2rem] w-screen overflow-x-hidden'>
                        <div className='flex flex-col gap-[4rem]'>
                        {loading && <p>Loading...</p>}
                        {error && <p>{error.message}</p>}
                        {test?.map(post => (
                            <>
                            <div className='flex justify-evenly pt-[2rem] pb-[2rem]'>
                                <div className='flex flex-col gap-[1.5rem]'>
                                    <p>Society</p>
                                    <p>{post.society}</p>
                                </div>
                                <div className='flex flex-col gap-[1.5rem]'>
                                    <p>Society</p>
                                    <p>{post.job}</p>
                                </div>
                                <div className='flex flex-col gap-[1.5rem]'>
                                    <p>Society</p>
                                    <p>{post.job_link}</p>
                                </div>
                                <div className='flex flex-col gap-[1.5rem]'>
                                    <p>Society</p>
                                    <p>{new Date(post.send_date).toDateString()}</p>
                                </div>
                                <div className='flex flex-col gap-[1.5rem]'>
                                    <p>Society</p>
                                    <p>{post.status}</p>
                                </div>
                            </div>
                            <Link to={`/${post._id}`}>Modifier</Link>
                            <Link to={`/1/${post._id}`} >Supprimer</Link>
                            </> )) }
                        </div>
                    </div>
                </div>
            </div>
        )  
        }

export default AffichageCandidature
