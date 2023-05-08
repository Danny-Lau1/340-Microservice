import getWeather from './weather_microservice.mjs'
import express from 'express';

let PORT = 5002

const app = express();
app.use(express.urlencoded({ extended: true }))

app.get('/weather', (async (req, res) => {

    const zipcode = req.query.zipcode;
    const apikey = req.query.apikey;
    const response = await getWeather(zipcode, apikey);
    res.json(response)


}
));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});