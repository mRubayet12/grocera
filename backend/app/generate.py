from app import app
from flask import request, jsonify
import json
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

@app.route("/api/generate", methods = ["POST"])
def generate():
    data = request.get_json()

    breakfast = data.get("breakfast", "")
    lunch = data.get("lunch", "")
    dinner = data.get("dinner", "")

    prompt = f"""
        The user wants to eat the following meals:
        Breakfast: {breakfast if breakfast else "skipped"}
        Lunch: {lunch if lunch else "skipped"}
        Dinner: {dinner if dinner else "skipped"}

        Return a JSON object with exactly this structure, nothing else, no markdown:
        {{
            "error": null,
            "recipes": [
                {{
                    "meal": "breakfast",
                    "name": "meal name",
                    "ingredients": [
                        {{ "item": "ingredient name", "quantity": "amount" }}
                    ],
                    "steps": ["step 1", "step 2"]
                }}
            ],
            "shopping_list": [
                {{ "item": "ingredient name", "quantity": "combined amount" }}
            ]
        }}

        Rules:
        - Only include meals that were not skipped.
        - Combine duplicate ingredients across all meals in the shopping list.
        - If any meal is inappropriate, offensive, not a real food, or cannot be cooked, do not generate any recipes or shopping list. Instead set "error" to a short friendly message explaining why, and set "recipes" and "shopping_list" to empty arrays.
        - If everything is valid, set "error" to null.
        """
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt)
    
    clean = response.text.strip().replace("```json", "").replace("```", "")
    result = json.loads(clean)
    
    print(result)
    return jsonify(result)