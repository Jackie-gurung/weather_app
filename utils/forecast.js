const request = require('postman-request');

const getWeather = ({longitude,latitude,location},callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3a1d3413e3a779a1652e291dfb90020c&query=${longitude},${latitude}`;
    request({url,json:true},(error,{body}) => {
        if(error){
            callback("Unable to connect to weather services",undefined);
        }else if(body.error){
            callback(body.error.info,undefined);
        }else{
            const currentData = body.current;
            callback(undefined, {temperature: currentData.temperature,feelslike : currentData.feelslike, weatherDescription: currentData.weather_descriptions[0], location})
        }
    })
}

module.exports = getWeather
