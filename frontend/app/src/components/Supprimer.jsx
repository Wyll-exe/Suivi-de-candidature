import '../style.css';
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router';
import axios from 'axios';

function Modifier () {
    const { id } = useParams();
    const [test, setTest] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
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
        status: ''
    });


    const deletePost = async () => {

        try {
            const {data, status} = await axios.delete(`http://localhost:3000/api/v1/${id}`);
            if(status === 200) navigate("/")
 
        } catch (error2) {
            console.error("Erreur", error2);
        }
    };

    useEffect(() => {
        fetchTest()
        
    }, [])



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
                <button type="submit" onClick={() => deletePost()}>Supprimer</button>
                </> ) }
            </div>
        </div>
    )
}

export default Modifier