import fetch from 'node-fetch';

async function getWeather(zipcode, appid) {

    // if statement - catches the id on 1 of the 2 buttons. 1st is using browser (this js file). 2nd is using express server (index.mjs - app.get(), app. use()). 
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${appid}&units=imperial`

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200) {
            return data;
        }

        else {
            console.log('invalid zipcode')
        }


    } catch (error) {
        console.error(error)
    }
};



// Testing the function
//const data = await getWeather(97206, '706a89b21c3113faafc5677f70808743')
//console.log(data.name)

/*

Different attributes retrieved from the return object


General weather = data.weather[0].main
Temperature = data.main.temp
City = data.name
*/

export default getWeather;

