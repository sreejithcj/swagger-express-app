About 
======

A Swagger powered REST API application developed in Node.js. "swagger-express-router" is used to define the routes and "swagger-ui-express" is used for the API documentation.

How to use the application
==========================

1. Go to application root folder and start the application with "npm start".       Application runs on port 5000
2. There is only one route defined, which is /users, it can be invoked by a POST to http://localhost:5000/v1/users with this sample payload in body.{"username":"user@gmail.com","password":"password", "first_name":"Raj", "last_name":"Kumar","full_name":"Raj Kumar"} 
3. API documentation can be accessed at http://localhost:5000/v1/docs/