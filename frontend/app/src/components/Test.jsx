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
            const url = "http://localhost:3000/api/v1"


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
        <div>
            <p>{post.society}</p>
            <p>{post.job}</p>
            <p>{post.job_link}</p>
            <p>{post.send_date}</p>
            <p>{post.status}</p>
        </div>
        </>
    )) }
        </div>
    )  
}

export default Test