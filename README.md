💬 Real-Time Chat Application

A full-stack real-time chat application built using Spring Boot, MongoDB, and React.
The application enables seamless real-time messaging with a scalable backend and modern frontend architecture.

🚀 Features

✅ Real-time messaging using WebSocket

✅ RESTful APIs with Spring Boot

✅ MongoDB for message persistence

✅ Interactive React frontend

✅ Dockerized backend

✅ Clean full-stack architecture

🏗 Project Structure
chat-app/
│
├── chat-app-backend/     # Spring Boot Backend
│   ├── src/
│   ├── pom.xml
│   ├── Dockerfile
│
├── frontend-chat/        # React Frontend
│   ├── src/
│   ├── public/
🛠 Tech Stack
🔹 Backend

Java

Spring Boot

Spring WebSocket

MongoDB

Maven

Docker

🔹 Frontend

React

JavaScript

HTML5

CSS3

⚙️ Backend Setup
1️⃣ Navigate to backend folder
cd chat-app-backend
2️⃣ Configure MongoDB

Ensure MongoDB is running locally.

Update application.properties:

spring.data.mongodb.uri=mongodb://localhost:27017/chatdb
3️⃣ Run Backend
mvn spring-boot:run

Backend runs at:

http://localhost:8080
💻 Frontend Setup
1️⃣ Navigate to frontend folder
cd frontend-chat
2️⃣ Install dependencies
npm install
3️⃣ Start React App
npm start

Frontend runs at:

http://localhost:3000
📡 API Endpoints

GET /api/messages – Retrieve chat messages

POST /api/messages – Send a new message

📌 Future Improvements

🔐 JWT Authentication

👥 Private & Group Chat

🌐 Cloud Deployment (AWS / Render)

📱 UI Enhancements

👨‍💻 Author

Sandeep Kumar
GitHub: https://github.com/sandeepkumar-dev
