import '../style.css';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function Modifier () {
    const { id } = useParams();
    const [test, setTest] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetchTest() {

        

        setLoading(true)
        try {
            const url = "http://localhost:3000/api/v1/"


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
      <div>
        <p>{id}</p>
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
                </> ) }
        </div>
    )
}

export default Modifier