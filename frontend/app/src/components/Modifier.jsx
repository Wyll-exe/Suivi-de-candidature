import '../style.css';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

function Modifier () {
    const { id } = useParams();
    const [test, setTest] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [updated, setUpdated] = useState(false)

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
        status: ''
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

        if (Object.keys(formError).length > 0) {
            setError2(formError);
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
            const response = await axios.put(`http://localhost:3000/api/v1/${id}`, user);
            console.log(response.data);
            setUpdated(!updated)
            alert("Votre candidature à été modifier avec succès !");
        } catch (error2) {
            console.error("Erreur", error2);
        }
    };

    useEffect(() => {
        fetchTest()
        
    }, [updated])



    return (
      <div>
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
                        <p>Society</p>
                        <p>{test.job}</p>
                    </div>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <p>Society</p>
                        <p>{test.job_link}</p>
                    </div>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <p>Society</p>
                        <p>{new Date(test.send_date).toDateString()}</p>
                    </div>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <p>Society</p>
                        <p>{test.status}</p>
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
                                <button type="submit">Valider</button>
                            </form>
                </> ) }
        </div>
    )
}

export default Modifier