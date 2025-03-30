import '../style.css';
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router';
import axios from 'axios';
import Header from "./utils/Header"

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
      <div className='overflow-x-hidden h-[100vh]'>
            <div>
                <Header />
            </div >
            <div className='h-[100vh] bg-gradient-to-r from-indigo-400 to-cyan-400 flex flex-col items-center pt-[1rem]'>
            <p class="bg-purple-100 text-purple-800 text-xl font-medium px-[2rem] py-[1rem] rounded-[20px] dark:bg-purple-900 dark:text-purple-300 mb-[4rem]">Page pour Supprimer</p>
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
                <div className='pt-[2rem]'>
                    <button type="submit" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => deletePost()}>Supprimer</button>
                </div>
                </> ) }
            </div>
        </div>
    )
}

export default Modifier