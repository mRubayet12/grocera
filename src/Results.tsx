import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './css/results.css'

function Results() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();
    const data = state?.data;

    const handleEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
            await fetch("https://grocera-dthp.onrender.com/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    email,
                    recipes: data.recipes,
                    shopping_list: data.shopping_list
                 })
            });
            //const retData = await response.json();
            setSent(true)
    }

    if (!data) {
        navigate("/createlist");
        return null;
    }

    return (
        <div className="results_wrapper">
            <div className="results_header">
                <h1 className="results_title">Your Shopping List and Recipes Are Ready!</h1>
                <p className="results_subtitle">Here's everything you need to shop and cook today.</p>
                <button className="results_new_btn" onClick={() => navigate("/createlist")}>
                    + Plan Another Day
                </button>
            </div>
            <div className="shopping_hero">
                <div className="shopping_hero_header">
                    <div>
                        <h2 className="shopping_hero_title">🛒 Shopping List</h2>
                        <p className="shopping_hero_sub">{data.shopping_list.length} items to shop</p>
                    </div>
                </div>
                <ul className="shopping_hero_list">
                    {data.shopping_list.map((item: any, index: number) => (
                        <li key={index} className="shopping_hero_item">
                            <span className="shopping_check">✓</span>
                            <span className="shopping_name">{item.item}</span>
                            <span className="shopping_qty">{item.quantity}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="recipes_section">
                <h2 className="results_section_title">Recipes</h2>
                <div className="recipes_grid">
                    {data.recipes.map((recipe: any, index: number) => (
                        <div className="recipe_card" key={index}>
                            <div className="recipe_card_header">
                                <div>
                                    <span className="recipe_meal_label">{recipe.meal}</span>
                                    <h3 className="recipe_name">{recipe.name}</h3>
                                </div>
                            </div>

                            <div className="recipe_section">
                                <p className="recipe_section_label">Ingredients</p>
                                <ul className="recipe_ingredients">
                                    {recipe.ingredients.map((ing: any, i: number) => (
                                        <li key={i}>
                                            <span className="ing_item">{ing.item}</span>
                                            <span className="ing_quantity">{ing.quantity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="recipe_section">
                                <p className="recipe_section_label">Steps</p>
                                <ol className="recipe_steps">
                                    {recipe.steps.map((step: string, i: number) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                <div className="email_section">
                    <div className="email_section_text">
                        <h2 className="email_section_title">Save it for later</h2>
                        <p className="email_section_sub">Get your shopping list and recipes sent straight to your email!</p>
                    </div>
                    <form className="email_form" onSubmit={handleEmail}>
                        <input
                            id="email"
                            className="email_input"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="email_btn" type="submit">{sent ? "Sent!" : "Send to my inbox"}</button>
                    </form>
                </div>
        </div>
    )
}

export default Results