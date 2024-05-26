Project Setup and Usage
This document outlines the steps to set up and use the project.

Prerequisites:-
Node.js and npm installed
MySQL installed and running

Step 1: Install Packages
To install the required packages, run the following command:
npm install

Step 2: Set Up MySQL Database
Start your MySQL server and create a database named nodejs_assignment:

CREATE DATABASE nodejs_assignment;

Step 3: Start the Project
To start the project, use the following command:

npm start

Step 4: Create a Form
To create a form, send a POST request to the following endpoint with the title parameter:

POST http://127.0.0.1:3000/form
Content-Type: application/json

{
"title": "users"
}
Response:

{
"success": true,
"code": 201,
"data": {
"status": 1,
"id": "5e406194-45d3-4c80-b0d9-e8152b90bceb",
"title": "users",
"updatedAt": "2024-05-26T14:48:06.839Z",
"createdAt": "2024-05-26T14:48:06.839Z"
},
"message": "Form Created"
}

Step 5: Fill Form Data
To fill data in the form, send a POST request to the following endpoint with the necessary parameters:

POST http://127.0.0.1:3000/fill-data
Content-Type: application/json

{
"formId": "5cb23902-87cf-4e61-8862-b3ebe03cac58",
"name": "kiran falmari",
"email": "asd@gmail.com",
"phoneNumber": "9876543210",
"isgraduate": true
}
Response:

{
"success": true,
"code": 201,
"data": {
"status": 1,
"id": "d1ff18b0-3ff1-4279-b8a6-448c32ff4f5c",
"formId": "5cb23902-87cf-4e61-8862-b3ebe03cac58",
"name": "kiran falmari",
"email": "asd@gmail.com",
"phoneNumber": "9876543210",
"isgraduate": true,
"updatedAt": "2024-05-26T14:49:03.540Z",
"createdAt": "2024-05-26T14:49:03.540Z"
},
"message": "Form Filled"
}
Step 6: Retrieve Form Data
To retrieve data based on the form title, send a GET request to the following endpoint:

GET http://127.0.0.1:3000/form-data?form_title=users
Response:

{
"success": true,
"code": 200,
"data": [
{
"id": "3c70f81c-908b-4a6a-bdaa-afc85ba347e2",
"formId": "5cb23902-87cf-4e61-8862-b3ebe03cac58",
"name": "kiran falmari",
"email": "asd@gmail.com",
"phoneNumber": "9876543210",
"isgraduate": true,
"status": 1,
"createdAt": "2024-05-26T14:33:05.000Z",
"updatedAt": "2024-05-26T14:33:05.000Z",
"deletedAt": null
},
{
"id": "592fceed-0775-44d4-a9f6-549cb552bb2c",
"formId": "5cb23902-87cf-4e61-8862-b3ebe03cac58",
"name": "kiran falmari",
"email": "asd@gmail.com",
"phoneNumber": "9876543210",
"isgraduate": true,
"status": 1,
"createdAt": "2024-05-26T14:33:11.000Z",
"updatedAt": "2024-05-26T14:33:11.000Z",
"deletedAt": null
},
{
"id": "d1ff18b0-3ff1-4279-b8a6-448c32ff4f5c",
"formId": "5cb23902-87cf-4e61-8862-b3ebe03cac58",
"name": "kiran falmari",
"email": "asd@gmail.com",
"phoneNumber": "9876543210",
"isgraduate": true,
"status": 1,
"createdAt": "2024-05-26T14:49:03.000Z",
"updatedAt": "2024-05-26T14:49:03.000Z",
"deletedAt": null
}
],
"message": "Get Filled Data"
}
