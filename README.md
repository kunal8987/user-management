User Management API Documentation

** Start The Local Server To Connect The Database In Backend Folder**
Introduction
The User Management API allows you to manage user accounts within your application. You can perform actions such as creating new users, updating user profiles, and deactivating or deleting accounts.

Authentication
Before using the API, you’ll need to authenticate. Obtain an API key or token by following the authentication process outlined in the official documentation.

Base URL
For The User Base Url:- /api/v1/profile
For The Auth Base Url :-/api/v1/auth

AUTH Endpoints
1 Register user

Endpoint
POST  /register

2 Login User

Endpoint
POST  /login

3 Email Comformation

Endpoint
POST  /email-conformed

_______________________________________________________________________________________________________________________________________________________________

USER Endpoints
1. Get User Profile
Retrieve information about a specific user.

Endpoint:

GET /get-profile

2. Create User
Create a new user account.

Endpoint:

POST /create-profile

3. Update User Profile
Update user information.

Endpoint:

PUT /update-profile/:id


This documentation provides an overview of the User Management API and its endpoints.
