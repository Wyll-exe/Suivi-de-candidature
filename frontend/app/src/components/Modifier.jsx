import '../style.css';
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router';
import axios from 'axios';
import Header from './utils/Header';


function Modifier () {
    const { id } = useParams();
    const [test, setTest] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [updated, setUpdated] = useState(false)
    let navigate = useNavigate();
    

    async function fetchTest() {

        

        setLoading(true)
        try {
            const url = `http://localhost:3000/api/v1/${id}`


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

    const [candidature, setCandidature] = useState({
        society: '',
        job: '',
        job_link: '',
        send_date: '',
        status: '',
        follow:''
    });

    const [error2, setError2] = useState({}); 


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
            setError2(formError);
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
            const {data, status } = await axios.put(`http://localhost:3000/api/v1/${id}`, user);
            setUpdated(!updated)
            alert("Votre candidature à été modifier avec succès !");
            if(status === 200) navigate("/")
        } catch (error2) {
            console.error("Erreur", error2);
        }
    };



    useEffect(() => {
        fetchTest()
        
    }, [updated])


    return (
      <div className='overflow-x-hidden h-[100vh]'>
            <div>
                <Header />
            </div>
            <div className='h-[100vh] bg-gradient-to-r from-indigo-400 to-cyan-400 flex flex-col items-center pt-[1rem]'>
            <p class="bg-purple-100 text-purple-800 text-xl font-medium px-[2rem] py-[1rem] rounded-[20px] dark:bg-purple-900 dark:text-purple-300 mb-[2rem]">Page pour Modifier</p>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {test && (
                <>
                <div className='flex justify-evenly h-[10rem] pt-[2.7rem] pb-[2rem] border-2 border-solid border-black bg-cyan-200 rounded-[20px] w-[100%] max-w-[1400px] drop-shadow-2xl'>
                   <div className='flex flex-col gap-[1.5rem]'>
                        <p>Society</p>
                        <p>{test.society}</p>
                    </div>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <p>job</p>
                        <p>{test.job}</p>
                    </div>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <p>Lien du job</p>
                        <p>{test.job_link}</p>
                    </div>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <p>Date</p>
                        <p>{new Date(test.send_date).toDateString()}</p>
                    </div>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <p>Status</p>
                        <p>{test.status}</p>
                    </div>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <p>Jour de relance</p>
                        <p>{test.follow}</p>
                    </div>
                </div>
                <div className='border-2 bg-gradient-to-r from-blue-200 to-cyan-200 border-solid rounded-[20px] border-black w-[20rem] mt-[2rem]'>
                    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                                <div className='h-[500px] flex flex-col items-center justify-evenly'>
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
                                        placeholder="Lien vers l\'offre"
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
                                        type="text" 
                                        placeholder='En attente, Acceptée, Refusée' 
                                        name='status' 
                                        value={candidature.status} 
                                        onChange={handleChange} 
                                        required 
                                        className='w-[50%] bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[20px] px-[1rem] py-[.2rem]'
                                    />
                                    <input
                                        type="number" 
                                        placeholder='Nombre de jour depuis la candidature' 
                                        name='follow' 
                                        value={candidature.follow} 
                                        onChange={handleChange} 
                                        required 
                                        className='w-[50%] bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[20px] px-[1rem] py-[.2rem]'
                                    />
                                </div>
                                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => deletePost()}>Valider</button>
                    </form>
                </div>
                </> ) }
            </div>
        </div>
    )
}

export default Modifier