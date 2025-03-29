import '../style.css';
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router';
import axios from 'axios';


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
      <div>
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
            <div className='pl-[26rem]'>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {test && (
                <>
                <div className='flex justify-evenly pt-[2rem] pb-[2rem]'>
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
                                    type="text" 
                                    placeholder='En attente, Acceptée, Refusée' 
                                    name='status' 
                                    value={candidature.status} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <input className='w-[50%]'
                                    type="number" 
                                    placeholder='Nombre de jour depuis la candidature' 
                                    name='follow' 
                                    value={candidature.follow} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <button type="submit" onClick={() => deletePost()}>Valider</button>
                            </form>
                </> ) }
            </div>
        </div>
    )
}

export default Modifier