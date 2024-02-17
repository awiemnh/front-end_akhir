# API Documentation

## Sign Up User

    Endpoint : https://proper-stirring-serval.ngrok-free.app/api/signup

    Method : POST

    Request Body:
    
    ```json
    {
        "username" : "nisa3",
        "email" : "nica3@gmail.com",
        "password" : "coba3"
    }
    ```

    Request Body (Success):
    ```json
    {
    "id": "26",
    "username": "nisa3",
    "email": "nica3@gmail.com",
    "password": "$2b$10$u0CacOLgg3OFreMmzHXxmeBVsIekcha95/mIhO/VQH9SPrTe6sFK6",
    "token": null,
    "created_at": "2024-02-17T05:05:13.443Z"
    }
    ```

    Request Body (Error):
    ```json
    {
    "Internal server error"
    }
    ```

    Request Body (Double Input Data):
    ```json
    {
    "error": "Username or email already exists"
    }
    ```

## Login User
    Endpoint : https://proper-stirring-serval.ngrok-free.app/api/login

    Method : POST

    Request Body:
    
    ```json
    {
        "username" : "nisa3",
        "password" : "coba3"
    }
    ```

    Request Body (Success):
    ```json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2IiwiaWF0IjoxNzA4MTQ2MzM0LCJleHAiOjE3MDgxNDk5MzR9.S4Q8fSvyoI5WphI61b2QPykX9VS2N585Uu_FlXEHabc"
    }
    ```

    Request Body (Error):
    ```json
    {
    "Internal server error"
    }
    ```


## Logout User
    Endpoint : https://proper-stirring-serval.ngrok-free.app/api/logout

    Method : POST

    Request Body:
    
    ```json
    {
        "username" : "nisa3"
    }
    ```

    Request Body (Success):
    ```json
    {
    "message": "Logout successful"
    }
    ```

    Request Body (Error):
    ```json
    {
    "Internal server error"
    }
    ```

