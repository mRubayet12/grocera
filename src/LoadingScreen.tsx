import { useState, useEffect } from 'react'
import './css/loadingscreen.css'

const messages = [
    "Consulting with Ratatouille...",
    "Bribing the chef...",
    "Raiding the pantry...",
    "Negotiating with the vegetables...",
    "Sharpening the knives...",
    "Preheating the AI...",
    "Checking the fridge...",
    "Stealing grandma's recipes...",
    "Convincing the carrots...",
]

function LoadingScreen() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex(prev => (prev + 1) % messages.length);
                setFade(true);
            }, 400);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading_wrapper">
            <div className="loading_card">
                <div className="loading_spinner">
                    <div className="spinner_ring"></div>
                    <span className="spinner_emoji">🍳</span>
                </div>
                <p className={`loading_message ${fade ? 'fade_in' : 'fade_out'}`}>
                    {messages[index]}
                </p>
                <p className="loading_sub">This usually takes a few seconds</p>
            </div>
        </div>
    )
}

export default LoadingScreen