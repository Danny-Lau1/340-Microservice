import fetch from "node-fetch";

const test = async () => {
    const response = await fetch(`http://localhost:5002/weather?zipcode=97206&apikey=706a89b21c3113faafc5677f70808743`);
    if (response.ok) {
        const data = await response.json()
        console.log(data)

    }
}
test()

/*
Different attributes retrieved from the return object

General weather = data.weather[0].main
Temperature = data.main.temp
City = data.name
*/
