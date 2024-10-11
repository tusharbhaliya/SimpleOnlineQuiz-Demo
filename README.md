<---- Project Overview -----> 
A simple quiz application with user authentication using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It incorporates full CRUD operations with token-based authentication (JWT).


<---- Technologies Use -----> 
React
Node.js
Express.js
Mongodb
JSON Web Token (JWT)


<---- Installation -----> 
1.Install all the dependencies
2.Create a file named ".env" inside the backend folder. Add data from .env file and substitute your credentials there.
3.Start the application
npm run start
Go to http://localhost:3000


<---- API -----> 
POST /api/auth/register
POST /api/auth/login
GET /api/admin/quizzes
POST /api/admin/quizzes
PUT /api/admin/quizzes/:id
DELETE /api/admin/quizzes/:id
GET /api/admin/quizzes/:id/questions
POST /api/admin/quizzes/:id/questions
PUT /api/admin/questions/:id
DELETE /api/admin/questions/:id
