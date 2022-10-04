# Sapien Nation Citizen Hub

This repo contains the Sapien Nation landing page and the Passport purchase flow.


# Setup

1. Clone this repo to your desktop.

    ```bash
    git clone https://github.com/Sapien-Nation/citizen-hub.git  
    ```
2. Create an `.env` file with the following values:
    ```bash
    NEXT_PUBLIC_ENV=LOCAL
    NEXT_PUBLIC_API_URL=http://localhost:9000
    NEXT_PUBLIC_API_AUTH_URL=http://localhost:5001
    ```
3. Install all dependencies.

    ```bash
    npm i
    ```
4. Run the client application.
    ```bash
    npm run dev
    ```
