📘 The Residents Book
A Full-Stack Resident Directory Application
```js
Deployed Link : https://wootzy-bsed.vercel.app/
```

📌 Overview
The Residents Book is a MERN stack web application designed to maintain a directory of residents. Users can add new resident profiles through a modal form, and view all existing residents in a structured, card-based layout. The app ensures no duplicate entries via email verification and provides instant feedback using toast notifications.

🛠️ Tech Stack
Layer	Technologies
Frontend	React, Vite, Axios, React Toastify
Backend	Node.js, Express.js, Mongoose, MongoDB
Others	Cloudinary (image URLs), dotenv, nodemon

🧩 Folder Structure
```js
project-root/
├── frontend/
│   ├── components/
│   │   ├── SubmissionForm.jsx
│   │   └── ResidentCard.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── models/
│   │   └── Profile.model.js
│   ├── routes/
│   │   └── ResidentRouter.js
│   ├── server.js
│   └── .env
```
🚀 Features
🧾 Resident Management
Add Resident
Modal-based form to submit new residents. Prevents duplicates using email validation.

List Residents
Fetch and display resident details dynamically. Provides visual feedback for empty state.

Responsive UI
Clean and responsive layout using custom CSS.

🔌 API Documentation

1. Add New Resident
Method: POST

Endpoint: /Add-Resident
```js
{
  "FirstName": "Jane",
  "LastName": "Doe",
  "Email": "jane.doe@example.com",
  "Role": "Designer",
  "ProfilePhoto": "https://image.url",
  "LinkedIn": "https://linkedin.com/in/janedoe",
  "Twitter": "https://twitter.com/janedoe"
}
```
Response Codes:
201 Created: Resident successfully added

400 Bad Request: Missing required fields

409 Conflict: Resident already exists

500 Internal Server Error: Server-side issue

2. Fetch All Residents
Method: GET

Endpoint: /

Response:
```js
{
  "message": "List of residents",
  "result": [
    {
      "_id": "662...",
      "FirstName": "Jane",
      "LastName": "Doe",
      "Email": "jane.doe@example.com",
      "Role": "Designer",
      "ProfilePhoto": "https://img.url",
      "LinkedIn": "https://linkedin.com/in/janedoe",
      "Twitter": "https://twitter.com/janedoe"
    }
  ]
}
```
🔄 Frontend Behavior
Components:
App.jsx
Manages modal state, fetches residents on load, and renders the resident list.

SubmissionForm.jsx
Handles form submission and API interaction for adding a resident.

ResidentCard.jsx
Displays individual resident profiles in a styled card format.

Toast Notifications
Uses react-toastify for success/error feedback on actions.

▶️ Run Locally
🔧 Backend
```js
cd backend
npm install
npm run dev
Ensure .env includes your MongoDB URI:
```
```js
MONGO_URI=your-mongodb-connection-string
```
🌐 Frontend
```js
cd frontend
npm install
npm run dev
```
