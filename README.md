# 340-Microservice

In order to satisfy the constraints of a microservice for this project, we will set up an Express server and a microservice. The Express server will handle an HTTP request to a specific route, which will then call on the microservice to obtain weather information. The user can obtain information by making a request to the Express server.

## Communication Contract

### Request Data

- Download all the code files and put them in a directory. 
    - If you decide not to download the 'node_modules' folder, open the terminal when you open the directory and type 'npm install'.
    - This should download all the dependencies that are listed in the 'package.json' file.
- In the terminal, type 'npm start'. This will run the 'server.mjs' file as dictated by the start script in the 'package.json' file
- The Express server will begin listening on the designated port. 
- Make an HTTP GET request to http://localhost:5002/weather?zipcode=PARAM1&apikey=PARAM2
    - PARAM1: a 5 digit zipcode
    - PARAM2: the apikey you received after registering an account with OpenWeather API

### Receive Data

- After making the HTTP GET request, you will be returned a json object that contains weather data based on the input zipcode
- To access the different properties of the json object, we can use dot notation
- For example:
    - To obtain general weather information, we can access that information by typing 'jsonObject.weather[0].main'
    - To obtain temperature, we can access the information by typing 'jsonObject.main.temp'
    - To obtain the city name, we can access the information by typing 'jsonObject.name' 
        - jsonObject can be whatever variable name you assign to the response from the HTTP GET request 
 
### UML Diagram

![UML Diagram](./UML%20Diagram.png)