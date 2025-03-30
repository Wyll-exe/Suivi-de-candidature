import '../style.css';
import { useEffect, useState } from 'react'
import Header from "./utils/Header"


function CandidatureRelance({ data }) {  
    const [test, setTest] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchTest() {
        setLoading(true);
        try {
            const url = "http://localhost:3000/api/v1/follow";
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Pas de relance trouvé");
            }
            const data = await response.json();
            setTest(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTest();
    }, []);

    return (
        <div>
            {console.log(test)}
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {data && data.length > 0 ? (
                data.map((post) => (
                    <div key={post.id} className='flex justify-evenly border-2 border-solid bg-cyan-200 rounded-[20px] w-[1055px] max-w-[1400px] drop-shadow-2xl'>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <strong> Society </strong>
                            <p>{post.society}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <strong> Job </strong>
                            <p>{post.job}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <strong> Not re-launched for </strong>
                            <p>{Number(post.follow)} d </p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <strong>Status</strong>
                            <p>{post.status}</p>
                        </div>
                        
                    </div>
                ))
            ) : (
                <p> WOosp </p>
            )}
        </div>
    );
}

export default CandidatureRelance;
