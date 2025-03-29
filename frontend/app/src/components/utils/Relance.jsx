import React, { useState, useEffect } from 'react';
import CandidatureRelance from '../CandidatureRelance';
import { Link } from "react-router";
import Footer from './Footer';
import '../../style.css';

const Relance = () => {

// Compteur statut
    const [counts, setCounts] = useState({ enAttente: 0, acceptees: 0, refusees: 0, total: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [filtredData, setFiltredData] = useState([]);
    const [days, setDays] = useState(""); 
    const [searchTerm, setSearchTerm] = useState("") 

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "http://localhost:3000/api/v1";
                const response = await fetch(url);
                const data = await response.json();

// Calcul footer
                const statusCounts = data.reduce(
                    (acc, item) => {
                        if (item.status === "En attente") acc.enAttente += 1;
                        else if (item.status === "Acceptée") acc.acceptees += 1;
                        else if (item.status === "Refusée") acc.refusees += 1;
                        return acc;
                    },
                    { enAttente: 0, acceptees: 0, refusees: 0 }
                );

// Total 
                statusCounts.total = data.length;
                setCounts(statusCounts);

                const filtered = data.filter(item => item.follow >= 1);
                setData(data);
                setFiltredData(filtered);

            } catch (err) {
                setError(err);
                console.error("Erreur lors de la récupération des données :", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleFilter = () => {
        let filtered = data;

        if (days) {
            filtered = filtered.filter(item => item.follow >= Number(days));
        }

// Pas sûr du ===
        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.society.toLowerCase() === searchTerm.toLowerCase() || 
                item.job.toLowerCase() === searchTerm.toLowerCase() 
            );
        }

        setFiltredData(filtered);
    };

    return (
        <>
{/* Header */}
            <main className=''>
                <header className='fixed top-0 left-0 z-10 bg-black w-full h-16 rounded-b-sm flex justify-center items-center'>
                    <div className='text-yellow-50 text-lg flex flex-row gap-4 z-100'>
                        <Link to="/" className='submit-3 bg-white px-4 py-2 rounded'> HOME </Link>
                    </div>
                </header>
                <content className='flex items-center justify-center'>
                    <div className='absolute top-0 left-0 w-full min-h-screen bg-black opacity-80'>
                        <video
                            autoPlay
                            loop
                            muted
                            className='w-full h-full object-cover fixed'>
                            <source src="/assets/videos/player.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className='w-300 h-auto bg-gray-900 flex flex-col justify-items-center mt-20 pb-16 z-1'>
{/* Barre d'options , recherche */}
                        <div className='w-full h-20 gap-6 bg-gray-800 flex mb-4'>
                            <input
                                type="text"
                                placeholder=" Search company / job ..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pr-4 bg-amber-50 border-5 border-b-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

{/* Jours de relance */}
                            <div className='w-auto border-4 flex items-center border-amber-50/0'>
                                <input
                                    type="number"
                                    min=""
                                    placeholder="Look for a Day"
                                    value={days}
                                    onChange={(e) => setDays(e.target.value)}
                                    className="p-2 border-5 h-full bg-amber-50 border-b-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className=''>
                                <button className='submit h-full' onClick={handleFilter}> SUBMIT </button>
                            </div>
                        </div>

{/* Offres */}
                        <div className='w-auto h-auto ml-2 mr-2 flex justify-center items-center rounded-3xl bg-lime-300'>
                            <div className='mt-4 mb-4 flex justify-center items-center w-full'>
                                <CandidatureRelance data={filtredData} />
                            </div>
                        </div>
                    </div>
                </content>
                <footer className='fixed bottom-0 left-0 flex flex-col w-full justify-end mt-auto z-150'>
                    {loading ? (
                        <p>loading ..</p>
                    ) : error ? (
                        <p>Erreur : {error.message}</p>
                    ) : (
                        <Footer
                            enAttente={counts.enAttente}
                            acceptees={counts.acceptees}
                            refusees={counts.refusees}
                            total={counts.total}
                        />
                    )}
                </footer>
            </main>
        </>
    );
};

export default Relance;
