# Login page - Fullstack project

# Full-Stack Authentication App

This project is a full-stack web application that implements user authentication using a **React** frontend, **Node.js** backend, and **MongoDB** database. 

## Technologies Used

- **Frontend:**
  - React
  - Chakra UI

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT (JSON Web Tokens)

## Features

- **User Registration:** Allows users to create an account by providing their name, email, and password.
- **User Login:** Users can log in with their email and password to gain access to the application.
- **Welcome Page:** After successful login, users are redirected to a welcome page.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>

2. **Start MongoDB.**
  Make sure your MongoDB server is running to generate a MongoDB URI.

3. **Backend setup.**
  Navigate to the backend directory and install the dependencies:

    ```bash
    cd backend
    npm install

4. **Set up the environment variables.**
  Create a file named `.env` in the `backend` directory and set the following variables:
    ```plaintext
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    SECRET_KEY=<your-secret-key>

- Update `<your-mongodb-uri>` with your actual MongoDB connection string.
- Update `<your-secret-key>` with a secure secret key for JWT.

5. **Start the Backend Server.**
  In the backend directory, run:
    ```bash 
    npm run dev 

6. **Frontend Setup.**
  Navigate to the frontend directory and install the dependencies:
    ```bash 
    cd ../frontend
    npm install

7. **Start the Frontend Server.**
  In the frontend directory, run:
    ```bash 
    npm run dev

Now, you should be able to access the application in your browser at http://localhost:5173.



## Design Choices

I chose to use **React** and **Node.js** due to their ease of use, particularly since everything is built in JavaScript. I found that setting up the server and creating the API with **Node.js** was very straightforward, allowing me to focus on developing the application's functionality.

Additionally, I opted for **Chakra UI** for the frontend because it made designing the pages straightforward and efficient. 
