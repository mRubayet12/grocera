# Grocera

An AI-powered meal planning and grocery shopping web application that generates complete recipes, cooking instructions, and consolidated shopping lists from user meal preferences.

## Overview

Grocera is a full-stack web application designed to simplify meal planning. Users enter their desired meals for breakfast, lunch, and dinner, and the application uses Google's Gemini AI to generate complete recipes along with a unified grocery shopping list.

The platform also allows users to receive their generated recipes and shopping lists directly via email, making meal planning and grocery preparation more convenient.

---

## Features

* AI-generated recipes using Google Gemini
* Supports breakfast, lunch, and dinner meal planning
* Step-by-step cooking instructions
* Automatically generated grocery shopping list
* Deduplicated ingredients across all meals
* Email delivery of recipes and shopping lists
* Responsive React frontend
* Custom-designed UI with handcrafted CSS
* Animated loading screen with rotating messages
* Input validation and offensive content filtering
* Secure API key management using environment variables
* Continuous deployment with GitHub, Vercel, and Render

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router DOM
* CSS

### Backend

* Python
* Flask
* Flask-CORS

### APIs & Services

* Google Gemini 2.5 Flash API
* Resend Email API

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Application Architecture

```text
┌──────────────┐
│ React Client │
└──────┬───────┘
       │
       ▼
┌─────────────────────┐
│ Flask REST API      │
└──────┬──────────────┘
       │
       ├──────────────► Gemini API
       │                (Recipe Generation)
       │
       └──────────────► Resend API
                        (Email Delivery)
```

---

## User Flow

1. User enters meal preferences.
2. Frontend sends data to the Flask API.
3. Backend constructs an AI prompt.
4. Gemini generates recipes and shopping list.
5. Backend parses the structured JSON response.
6. Results are returned to the frontend.
7. User can optionally email the generated content.
8. Resend delivers a formatted HTML email.

---

## Error Handling

The application gracefully handles:

* Empty meal selections
* Missing inputs
* Invalid requests
* Offensive or inappropriate meal descriptions
* Gemini API failures
* Email delivery failures
* Network connectivity issues

User-friendly error messages are displayed throughout the application.

---

## Security

* API keys stored using environment variables
* Sensitive files excluded through `.gitignore`
* No secrets committed to source control
* CORS configuration restricted to approved origins
* Backend validation for all incoming requests

---

## Deployment

### Frontend

Deployed on Vercel with automatic deployments from the `main` branch.

### Backend

Deployed on Render as a Flask web service with automatic deployments from the `main` branch.

Every push to the repository triggers a new deployment pipeline.

---

## Author

**Mohammad Rubayet Islam**

Computer Science Student at Florida State University
