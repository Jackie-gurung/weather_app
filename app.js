const request = require('postman-request');
const url = 'http://api.weatherstack.com/current?access_key=3a1d3413e3a779a1652e291dfb90020c&query=28.3949,84.1240&units=f';

request({url:url,json:true},(error,response) => {
    const currentData = response.body.current;
    const unit = response.body.request.unit;
    // console.log(response.body);
    console.log(` ${currentData.weather_descriptions[0]} It is currently ${currentData.temperature} ${unit} out there. It feels like ${currentData.feelslike} ${unit} .`)
})