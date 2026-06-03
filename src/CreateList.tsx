import "./css/createlist.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import LoadingScreen from './LoadingScreen.tsx'

function CreateList() {
    const [breakfast, setBreakfast] = useState("");
    const [lunch, setLunch] = useState("");
    const [dinner, setDinner] = useState("");
    const [isLoading, setIsLoading] = useState(false); 
    const navigate = useNavigate(); 

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:5000/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ breakfast, lunch, dinner })
            });

            const data = await response.json();
            setIsLoading(false);

            if (data.error) {
                alert(data.error);
            } else {
                navigate("/results", {state: {data}});
            }
        } catch (err) {
            setIsLoading(false);
            alert("Something went wrong. Please try again.");
        }
    };

    if (isLoading) return <LoadingScreen />;

    return (
        <div className="meal-form-wrapper">
        <div className="meal-form-header">
            <h1>Today's meal plan</h1>
            <p>Log what you're eating throughout the day.</p>
        </div>

        <form className="meal-form" onSubmit={handleSignUp}>
            <div className="meal-field">
            <label htmlFor="breakfast">Breakfast</label>
            <input
                id="breakfast"
                className="breakfast_dish"
                type="text"
                placeholder="e.g. oatmeal with berries"
                value={breakfast}
                onChange={(e) => setBreakfast(e.target.value)}
            />
            </div>

            <div className="meal-field">
            <label htmlFor="lunch">Lunch</label>
            <input
                id="lunch"
                className="lunch_dish"
                type="text"
                placeholder="e.g. grilled chicken salad"
                value={lunch}
                onChange={(e) => setLunch(e.target.value)}
            />
            </div>

            <div className="meal-field">
            <label htmlFor="dinner">Dinner</label>
            <input
                id="dinner"
                className="dinner_dish"
                type="text"
                placeholder="e.g. salmon with roasted vegetables"
                value={dinner}
                onChange={(e) => setDinner(e.target.value)}
            />
            </div>

            <button className="signup_button" type="submit">Submit meal plan</button>
        </form>
        </div>
    )
}

export default CreateList