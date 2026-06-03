import home_image from "./assets/home-image.png"
import "./css/home.css"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="first_block">
                <div className="first_block_text">
                    <h1 className="title">From Meal Idea to Shopping List in Seconds</h1>
                    <h3 className="subtitle">Just tell us what you're eating. Grocera's AI takes care of the recipes, ingredients, and your entire shopping list.</h3>
                    <Link to="/createlist" className="first_block_button">Get Started</Link>
                </div>
                <img src={home_image} className="first_block_image"></img>
            </div>

            <div className="second_block">
                <div className="hiw_header">
                    <span className="hiw_label">How it works</span>
                    <h2 className="hiw_heading">
                        From meal idea to shopping list <br />
                        <span className="hiw_heading_accent">in 4 simple steps</span>
                    </h2>
                </div>

                <div className="hiw_grid">
                    <div className="hiw_card">
                        <div className="hiw_card_top">
                            <span className="hiw_card_number">01</span>
                        </div>
                        <h3 className="hiw_card_title">Enter Your Meals</h3>
                        <p className="hiw_card_desc">Tell Grocera what you feel like eating for breakfast, lunch, or dinner. Skip any meal you don't need.</p>
                        <div className="hiw_card_connector">→</div>
                    </div>

                    <div className="hiw_card">
                        <div className="hiw_card_top">
                            <span className="hiw_card_number">02</span>
                        </div>
                        <h3 className="hiw_card_title">AI Finds Your Recipes</h3>
                        <p className="hiw_card_desc">Grocera uses AI instantly looks up the perfect recipe for each meal — no searching, no tab-switching.</p>
                        <div className="hiw_card_connector">→</div>
                    </div>

                    <div className="hiw_card">
                        <div className="hiw_card_top">
                            <span className="hiw_card_number">03</span>
                        </div>
                        <h3 className="hiw_card_title">Ingredients Are Combined</h3>
                        <p className="hiw_card_desc">Every ingredient is extracted and merged across all your meals. Duplicates combined, quantities summed.</p>
                        <div className="hiw_card_connector">→</div>
                    </div>

                    <div className="hiw_card hiw_card_featured">
                        <div className="hiw_card_top">
                            <span className="hiw_card_number">04</span>
                            <span className="hiw_card_icon">🛒</span>
                        </div>
                        <h3 className="hiw_card_title">Get Recipes & Shopping List</h3>
                        <p className="hiw_card_desc">Your full recipes and a complete, ready-to-shop grocery list — all in one place, generated in seconds.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home