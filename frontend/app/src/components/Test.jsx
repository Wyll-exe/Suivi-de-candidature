import '../style.css';
import { Link } from "react-router";
import { useEffect, useState } from 'react'


function Test() {  

    const [test, setTest] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    


    async function fetchTest() {

        

        setLoading(true)
        try {
            const url = "http://localhost:3000/api/v1/follow"


            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("pas de citation trouvé")
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
            {console.log(test)}
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
    {test?.map(post => (
        <>
        <div className='flex items-center justify-around gap-1'>
            <p>{post.society}</p>
            <p>{post.job}</p>
            <p>{post.follow} j</p>
            <p>{post.status}</p>
            <input type="text" placeholder='Date de relance' className= 'bg-cyan-200 border-b-black border-5 w-31'/>
            <button className='submit-2'> SEND </button>
        </div>
        </>
    )) }
        </div>
    )  
}

export default Test

