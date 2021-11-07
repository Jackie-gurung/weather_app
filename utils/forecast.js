const request = require('postman-request');

const getWeather = (coordinates,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3a1d3413e3a779a1652e291dfb90020c&query=${coordinates.longitude},${coordinates.latitude}`;
    request({url:url,json:true},(error,response) => {
        if(error){
            callback("Unable to connect to weather services",undefined);
        }else if(response.body.error){
            callback(response.body.error.info,undefined);
        }else{
            const currentData = response.body.current;
            callback(undefined, {temperature: currentData.temperature,feelslike : currentData.feelslike, weatherDescription: currentData.weather_descriptions[0], location : coordinates.location})
        }
    })
}

module.exports = getWeather
