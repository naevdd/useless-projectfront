import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactTyped } from 'react-typed';
import Typewriter from 'react-typewriter-effect';

function Advice() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [storedHistory, setStoredHistory] = useState([]);
    const [status, setStatus] = useState("Loading history...");

    useEffect(() => {
        axios.get("https://useless-projectback.onrender.com/api/get-history")
            .then(response => {
                const historyData = response.data.history || [];
                setStoredHistory(historyData);
                console.log("Fetched stored history:", historyData);

                if (historyData.length > 0) {
                    setStatus("History loaded.");
                } else {
                    setStatus("No history found.");
                }
            })
            .catch(error => {
                console.error("Error fetching stored history:", error);
                setStatus("Error loading history.");
            });
    }, []);

    const handleGenerate = async () => {
        console.log('sending', prompt);
        const inp='ADVICE :'+prompt
        setResponse("Coming up with advice..."); 
        try {
            const response = await axios.post("https://useless-projectback.onrender.com/api/generate", {inp});
        console.log("Full response from server:", response);

        const responseText = response.data?.text?.text || "No response text available";
        
        if (typeof responseText === 'string') {
            setResponse(responseText); 
        } else {
            console.error("Invalid response format:", response.data);
            setResponse("Received an unexpected response format.");
        }
        } catch (error) {
            console.error("Error:", error);
            setResponse("Error generating excuse.");
        }
    };

    return (
            <div className="text-center p-6 mt-36">
                <h1 className="text-6xl font-bold text-teal-300 mb-10">
                    NEED ADVICE ON SOMETHING?
                </h1>
                <ReactTyped 
                    strings={[
                        "Need help studying?",
                        "Maidenless?",
                        "How to make friends?",
                    ]}
                    typeSpeed={30}
                    backSpeed={30}
                    attr="placeholder"
                    loop
                >
                    <input 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                        className="text-center text-1xl mb-3 bg-transparent placeholder:text-slate-400 text-cyan-300 text-sm border border-slate-200 rounded-md px-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    />
                </ReactTyped>
                <div className='mb-10'><button 
                    onClick={handleGenerate}
                    className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-400 transition duration-300"
                >
                    Generate Advice
                </button>
                </div>
                <h2 className="text-white text-2xl mt-4 mb-10 justify-items-center">
                <Typewriter
                    key={response}
                    text={response}
                    typeSpeed={20} 
                    cursorColor="white"
                    startDelay={500} 
                />
                </h2>
                <p className="text-teal-300 text-3xl">
                    You've come to the right place!
                </p>
            </div>
    );
}

export default Advice;